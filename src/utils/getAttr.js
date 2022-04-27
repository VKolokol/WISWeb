function getAttr (obj, methodName) {
    let method;
    const objMethod = obj[methodName];

    if(objMethod) {
        method = objMethod.bind(obj)
    }
    return {
        isMethod: objMethod,
        method: method
    }
}

export default getAttr;