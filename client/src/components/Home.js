// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch('/events')
//       .then(response => response.json())
//       .then(data => setEvents(data))
//       .catch(error => console.error('Error fetching events:', error));
//   }, []);

//   const deleteEvent = (id) => {
//     fetch(`/events/${id}`, { method: 'DELETE' })
//       .then(() => setEvents(events.filter(event => event._id !== id)))
//       .catch(error => console.error('Error deleting event:', error));
//   };

//   return (
//     <div className="container mx-auto py-6">
//       <h1 className="text-2xl font-bold mb-4">Events</h1>
//       <Link to="/create" className="btn btn-primary mb-4">Create Event</Link>
//       <ul className="space-y-4">
//         {events.map(event => (
//           <li key={event._id} className="bg-white p-4 shadow rounded">
//             <h2 className="text-xl font-semibold">{event.title}</h2>
//             <p>{event.description}</p>
//             <p>{new Date(event.date).toLocaleDateString()}</p>
//             <p>{event.location}</p>
//             <div className="flex space-x-4 mt-4">
//               <Link to={`/update/${event._id}`} className="btn btn-secondary">Update</Link>
//               <button onClick={() => deleteEvent(event._id)} className="btn btn-danger">Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
/* import React, { useState, useEffect } from 'react';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:4000/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : events.length === 0 ? (
        <p>No events found</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event._id}>{event.location}</li>
            
          
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home; */
/* import React, { useState, useEffect } from 'react';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:4000/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : events.length === 0 ? (
        <p>No events found</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event._id} className="border rounded-lg p-4 shadow-lg">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home; */
/* import React, { useState, useEffect } from 'react';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:4000/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      const createdEvent = await response.json();
      setEvents((prevEvents) => [...prevEvents, createdEvent]);
      setNewEvent({ title: '', description: '', date: '', location: '' });
    } catch (error) {
      console.error('Error creating event:', error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      {loading ? (
        <p>Loading...</p>
      ) : events.length === 0 ? (
        <p>No events found</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event._id} className="border rounded-lg p-4 shadow-lg">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Date</label>
            <input
              type="datetime-local"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
 */
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:4000/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      const createdEvent = await response.json();
      setEvents((prevEvents) => [...prevEvents, createdEvent]);
      setNewEvent({ title: '', description: '', date: '', location: '' });
    } catch (error) {
      console.error('Error creating event:', error.message);
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/events/${editingEvent._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingEvent)
      });
      if (!response.ok) {
        throw new Error('Failed to update event');
      }
      const updatedEvent = await response.json();
      setEvents((prevEvents) => prevEvents.map(event => (event._id === updatedEvent._id ? updatedEvent : event)));
      setEditingEvent(null);
    } catch (error) {
      console.error('Error updating event:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/events/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }
      setEvents((prevEvents) => prevEvents.filter(event => event._id !== id));
    } catch (error) {
      console.error('Error deleting event:', error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      {loading ? (
        <p>Loading...</p>
      ) : events.length === 0 ? (
        <p>No events found</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event._id} className="border rounded-lg p-4 shadow-lg">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => setEditingEvent(event)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleDelete(event._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Date</label>
            <input
              type="datetime-local"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Create Event
          </button>
        </form>
      </div>
      {editingEvent && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={editingEvent.title}
                onChange={handleEditInputChange}
                className="border rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <textarea
                name="description"
                value={editingEvent.description}
                onChange={handleEditInputChange}
                className="border rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Date</label>
              <input
                type="datetime-local"
                name="date"
                value={editingEvent.date}
                onChange={handleEditInputChange}
                className="border rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={editingEvent.location}
                onChange={handleEditInputChange}
                className="border rounded-lg p-2 w-full"
                required
              />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Update Event
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
              onClick={() => setEditingEvent(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
