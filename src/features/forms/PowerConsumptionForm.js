import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../../css/PowerConsumptionForm.css'; // Import CSS module

const initialValues = {
  entries: Array.from({ length: 11 }, () => ({
    kwh: '22',
    moneyPaid: '33'
  }))
};

const validateEntries = (entries) => {
  const errors = {};

  // Check if at least the first three rows have values
  const hasRequiredValues = entries.slice(0, 3).every(entry => entry.kwh && entry.moneyPaid);

  if (!hasRequiredValues) {
    errors._global = 'Minimum three rows must have values';
  }

  entries.forEach((entry, index) => {
    const entryErrors = {};

    if (!entry.kwh || isNaN(entry.kwh) || entry.kwh <= 0) entryErrors.kwh = 'kWh must be a positive number';
    if (!entry.moneyPaid || isNaN(entry.moneyPaid) || entry.moneyPaid <= 0) entryErrors.moneyPaid = 'Money paid must be a positive number';

    if (Object.keys(entryErrors).length > 0) {
      errors[index] = entryErrors;
    }
  });

  return errors;
};

const handleSubmit = (values) => {
  console.log('Form submitted with values:', values);
  // Add further logic to handle the form submission, such as sending data to a server
};

const PowerConsumptionForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setErrors }) => {
        const errors = validateEntries(values.entries);
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
        } else {
          handleSubmit(values);
        }
      }}
    >
      {({ values, errors }) => (
        <Form>
          <div className="container">
            <div className="row">
              <div className="col-2">
                {/* Empty column */}
              </div>
              <div className="col-8">
                <br />
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Numero de bimestre</th>
                      <th>kWh</th>
                      <th>Importe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.entries.map((entry, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Field
                            type="number"
                            name={`entries.${index}.kwh`}
                            className={`form-control ${errors[index]?.kwh ? 'is-invalid' : ''} ${styles.formControl}`}
                            placeholder="Enter kWh"
                          />
                          <ErrorMessage name={`entries.${index}.kwh`} component="div" className="invalid-feedback" />
                        </td>
                        <td>
                          <div className={`input-group mb-3 ${styles.inputGroup}`}>
                            <div className="input-group-prepend">
                              <span className="input-group-text">$</span>
                            </div>
                            <Field
                              type="number"
                              name={`entries.${index}.moneyPaid`}
                              className={`form-control ${errors[index]?.moneyPaid ? 'is-invalid' : ''} ${styles.formControl}`}
                              placeholder="Enter amount"
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">.00</span>
                            </div>
                            <ErrorMessage name={`entries.${index}.moneyPaid`} component="div" className="invalid-feedback" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {errors._global && <div className="alert alert-danger">{errors._global}</div>}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PowerConsumptionForm;
