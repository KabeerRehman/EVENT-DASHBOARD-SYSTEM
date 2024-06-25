/* import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const history = useHistory();
  const [event, setEvent] = useState({ title: '', description: '', date: '', location: '' });

  useEffect(() => {
    fetch(`/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    })
      .then(() => history.push('/'))
      .catch(error => console.error('Error updating event:', error));
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Update Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input type="text" name="title" value={event.title} onChange={handleChange} className="input" />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea name="description" value={event.description} onChange={handleChange} className="textarea"></textarea>
        </div>
        <div>
          <label className="block font-medium">Date</label>
          <input type="date" name="date" value={event.date.split('T')[0]} onChange={handleChange} className="input" />
        </div>
        <div>
          <label className="block font-medium">Location</label>
          <input type="text" name="location" value={event.location} onChange={handleChange} className="input" />
        </div>
        <button type="submit" className="btn btn-primary">Update Event</button>
      </form>
    </div>
  );
};

export default Update; 
 */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({ title: '', description: '', date: '', location: '' });

  useEffect(() => {
    fetch(`http://localhost:4000/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  const handleUpdate = () => {
    fetch(`http://localhost:4000/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })
      .then(response => response.json())
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating event:', error));
  };

  return (
    <div>
      <h2>Update Event</h2>
      <input
        type="text"
        value={event.title}
        onChange={e => setEvent({ ...event, title: e.target.value })}
        placeholder="Title"
      />
      <input
        type="text"
        value={event.description}
        onChange={e => setEvent({ ...event, description: e.target.value })}
        placeholder="Description"
      />
      <input
        type="date"
        value={event.date}
        onChange={e => setEvent({ ...event, date: e.target.value })}
      />
      <input
        type="text"
        value={event.location}
        onChange={e => setEvent({ ...event, location: e.target.value })}
        placeholder="Location"
      />
      <button onClick={handleUpdate}>Update Event</button>
    </div>
  );
};

export default Update;
