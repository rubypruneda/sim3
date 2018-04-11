insert into friend
( given_name, picture, sub, gender  )
values
( $1, $2, $3, $4 )
returning *;

