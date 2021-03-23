gh-pages: https://vladmoskov.github.io/app/

This is my firs project - Social network.
Made with course "React - way of samurai 1.0/2.0" in IT-KAMASUTRA(https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g)

After 1.0 project was refactored to functional components hooks and typescript on my own.  
After 2.0 will make some chenges with autorization, dialogs and other. Sometimes tasks from TO-DO (lower) are done. 

Used server API: https://docs.google.com/document/d/1ZSXmTzkgq_Kj1VbWuq8fTv_DPD95GFDvPZgqFeIYGoM/edit# 

The project uses cookies. 
Authorization process is under development. 
So for testing application you must be authorize on https://social-network.samuraijs.com/


Used librures: 
  - React
  - Redux
  - react-redux (refactored)
  - redux-form (refactored)
  - formik
  - react-router-dom
  - axios
  - redux-thunk
  - TypeScript
  - gh-pages


//TO-DO
1. Settings 
    - preloader image
    - user alerts (success/error)
    - put request dont work in some inputs
    - usability for editMode (possibly onMouseOver/onMouseLeave, stop edit when Enter was pressed)

2. Login page
    - add logIn/logOut logic in Auth-reducer
    - LoginAPI in API.tsx
    - try Formik for login form
    - form-validators
    - try StyledComponent in Login page

3. Header loginIn/user (right side container)
    - fix alignment
    - add modal or drop-down menu with logOut changeAvatar ect.
    - add avatar at left side from nickname

4. Profile
    - styles for UserStatus
    - styles for NewPostForm
    - hide NewPostForm in profilePage for ather users
    - add hover image (change image) for avatar

5. FindUsers
    - change pagination (possibly try materialUI paginator)
    - update styles for usersItem-s
    - add search form (without logic first time)

6. Dialogs
    - websockets/socket IO learning
