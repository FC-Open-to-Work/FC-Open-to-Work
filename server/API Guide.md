# API Guide

## Authentication

### Login

```
POST /login
```

#### Request

```
{
    "email": "email",
    "password": "password"
}
```

#### Responses (Corresponding Status Code)

**200** - Login successful

```
{
    "token": "TOKEN_VALUE"
}
```

**401** - Incorrect password

```
{
    "error": "Bad credentials"
}
```

**404** - User not found

```
{
    "error": "User not found"
}
```

### Signup

```
POST /signup
```

#### Request

```
{
    "username": "username",
    "password": "password",
    "email": "email"
}
```

#### Responses (Corresponding Status Code)

**201** - Signup successful

```
{
    "success": "User created"
}
```

**409** - Duplicate email

```
{
    "error": "Duplicate email"
}
```



