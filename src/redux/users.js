import { combineReducers } from 'redux';


const NEW_USER_LOGIN = 'NEW_USER_LOGIN';


export function userLogin(user) {
    return {
      type: NEW_USER_LOGIN,
      user: user,
    }
}


const defaultUser = [
    {
        name: 'John1',
        surname: 'Doe',
        email: 'default@default.com'
    }
  ];


function users(state=defaultUser, action) {
    switch (action.type) {
        case NEW_USER_LOGIN:
            return [{
                name: action.user.name,
                surname: action.user.surname,
                email: action.user.email
            }];
        default:
            return state;
    }
}

const userApp = combineReducers({
    users
});
  
export default userApp;