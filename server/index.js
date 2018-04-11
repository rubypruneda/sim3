require( 'dotenv' ).config( )

const express = require( 'express' ),
    session = require( 'express-session' ),
    passport = require( 'passport' ),
    Auth0Strategy = require( 'passport-auth0' ),
    massive = require( 'massive' );

    const {
        SERVER_PORT,
        SESSION_SECRET,
        DOMAIN,
        CLIENT_ID,
        CLIENT_SECRET,
        CALLBACK_URL,
        CONNECTION_STRING
    } = process.env;


    const app = express( );

    
    app.use( session( {
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
      } ) );

      massive(CONNECTION_STRING).then( db => {
        console.log('db connected')
        app.set( 'db', db )
    } ) 



      app.use( passport.initialize( ) )
      app.use( passport.session( ) )


      passport.use( new Auth0Strategy( { 
        domain: DOMAIN,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
        scope: 'openid profile'
      }, function( accessToken, refreshToken, extraParams, profile, done ) {
          //database calls
          const db = app.get( 'db' )

          const { given_name, picture, sub, gender } = profile._json
        //   console.log(profile)

          db.retrieve_friend( [ sub ] ).then( response => {
              if ( response[ 0 ] ) {
                  done(null, response[ 0 ].id )
              } else {
                  db.create_friend( [ given_name, picture, sub, gender ] ).then( response => { 
                      done( null, response[ 0 ].id )
                  } )
              }
          } )


      } ) )


      passport.serializeUser( ( id, done ) => {
        done( null, id )
    } )

    passport.deserializeUser( ( id, done ) => { 
        const db = app.get( 'db' )
        db.logged_in_friend( [ id ] ).then( res => { 
            done( null, res[ 0 ] )
         } )
    } )


    app.get( '/auth', passport.authenticate( 'auth0' ) )
    app.get( '/auth/callback', passport.authenticate( 'auth0', {
        successRedirect: 'http://localhost:3001/#/dashboard'
    } ) )


    app.get( '/auth/me', ( req, res ) => { 
        if ( !req.user ) {
            res.status( 404 ).send( 'not logged in' )
        } else {
            res.status( 200 ).send( req.user )
        }
     } )

     app.get( '/logout', ( req, res ) => {
         req.logOut( );
         res.redirect( 'http://localhost:3000/')
     } )

     app.delete('/delete', (req, res) => {

     } )

     app.post('/update', (req, res) => {
        
     } )

     app.put('/read', (req, res) => {
                
     } )         

      app.listen( SERVER_PORT, () =>{ 
        console.log ( `Its over ${SERVER_PORT}!` ) 
    } )