import React, { useState, useEffect } from "react";

const EventForm = (props) => {
    const initialFieldValues = {
        eventName: '',
        description: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId === '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.eventObjects[props.currentId]
            })
    }, [props.currentId, props.eventObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Event Name" name="eventName"
                    value={values.eventName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Event Description" name="description"
                    value={values.description}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId === '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form >
    );
}

export default EventForm;