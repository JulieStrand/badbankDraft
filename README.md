# badbankDraft
Non-working copy of Badbank app - won't connect to database

This code should work, but it won't connect to the database. An earlier example of this code did connect, but only with an old version of MongoDB installed (3.7.3), not with the current version (5.1.0). I cannot simply run the code on the old version of Mongo because that causes the mysterious error "'require' not defined," even though require isn't used anywhere in the code. 

If you run the code, the console should say "Running on port: 3000" then on the next line "Connected successfully to db server" once the connection is established. I'm not getting the connection alert, and when you try to register a user, for example, I get all kinds of errors. 
