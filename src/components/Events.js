import React, { useState, useEffect } from "react";
import EventForm from "./EventForm"
import firebaseDb from "../firebase";

const Events = () => {

    var [eventObjects, setEventObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('events').on('value', snapshot => {
            if (snapshot.val() != null)
                setEventObjects({
                    ...snapshot.val()
                })
            else
                setEventObjects({})

        })
    }, [])// similar to componentDidMount

    const addOrEdit = obj => {
        if (currentId === '')
            firebaseDb.child('events').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
            firebaseDb.child(`events/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            debugger
            firebaseDb.child(`events/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Event Registeration</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <EventForm {...({ addOrEdit, currentId, eventObjects })} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Event Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(eventObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{eventObjects[id].eventName}</td>
                                        <td>{eventObjects[id].description}</td>
                                        <td>
                                            <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Events;