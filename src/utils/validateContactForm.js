export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Requerido';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Mínimo 2 carácteres';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Debe ser 15 carácteres o menos';
    }

    if (!values.lastName) {
        errors.lastName = 'Requerido';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Mínimo 2 carácteres';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Debe ser 15 carácteres o menos';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'El numero debe contener unicamente numeros';
    }
    
    if (!values.email.includes('@')) {
        errors.email = 'El correo debe tener un @'
    }

    return errors; 
}
