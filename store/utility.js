/* eslint-disable prettier/prettier */
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};
/* export const addObject=(oldObject,newObject) =>{
    return{
        [...oldObject,...newObject]
    }
} */
