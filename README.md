# Summary
1. User Registration and Authentication
    1. Users can register and be authenticated with local or open auth by social accounts (LINE, Google).

# Table of Contents
1. [User Registration and Authentication](#User-Registration-and-Authentication)

# User Registration and Authentication
## Libraries
1. Authentication - JWT (JSON Web Token) `jasonwebtoken`
1. MySQL ORM (Object-relational Mapping) - `sequlize` and `mysql2`
1. Information Email - `sendgrid`
1. Validate user data - `validator`
1. Password hashing - `bcrypt`
1. Email forwarding - `@sendgrid/mail`
1. CORS (cross origin resource sharing) - `cors`

## Routers
1. User
    1. User profile
        1. POST `/user` - create a user in database
        1. GET `/user/me` - fetch login user data
        1. PATCH `/user/me` - update login user data
        1. DELETE `/user/me` - delete the login user
    1. User Image (avatar)
        1. POST `/user/me/avatar` - upload/change user avatar image
        1. DELETE `/user/me/avatar` - remove user avatar image
        1. GET `/user/:id/avatar` - get a user avatar image
    1. User Login
        1. POST `/user/login` - login user
        1. POST `/user/logout` - logout user from a session
        1. POST `/user/logoutAll` - clear all user login sessions
1. User Admin
    1. GET `/user/all` - fetch all user data
    1. GET `/user/:id` - fetch data of a specific user
    1. PATCH `/user/:id` - update data of a specific user
    1. POST `/user/:id/avatar` - upload/change avatar iamge of a specific user

## Security
1. Strategies
    1. `CORS` limitation to ensure the server only accepts requests from certain origins.
    1. verify token with form submission to prevent `CSRF` (cross site request forgery).
1. Workflow

## Models
1. User
    1. id
    1. firstname
    1. lastname
    1. email
    1. password
    1. username
    1. phone
    1. google_id
    1. google_token
    1. line_id
    1. line_token
    1. created_at
    1. updated_at