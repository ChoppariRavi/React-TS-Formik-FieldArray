import React from "react";

import { Formik, Form, Field, FieldArray } from "formik";

const MyInput = ({ field, form, ...props }) => {
  console.log(field, form, props)
  return <input {...field} {...props} />;
};

const FormTest = () => (
  <div>
    <h1>Friend List</h1>

    <Formik
      initialValues={{ friends: [{name: "jared"}, {name: "ian" }, {name: "brent" }, ] }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                {values.friends && values.friends.length > 0 ? (
                  values.friends.map((friend, index) => (
                    <div key={index}>
                      <Field name={`friends.${index}.name`} />
                      <Field
                        name={`friends.${index}.name`}
                        placeholder="Doe"
                        component={MyInput}
                      />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>

                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}

                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default FormTest;
