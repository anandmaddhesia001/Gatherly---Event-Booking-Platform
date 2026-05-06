import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHeadset,
  FaTicketAlt,
} from "react-icons/fa";

import api from "../utils/axios";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEvents();
  }, [search]);

  const fetchEvents = async () => {
    try {
      const { data } = await api.get(`/events?search=${search}`);
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f5f7fb] min-h-screen">
      {/* HERO SECTION */}
  <section className="pt-2">
  <div
    className="
      relative
      overflow-hidden
      rounded-[20px]
      h-[calc(100vh-160px)]
      min-h-[650px]
      bg-cover
      bg-center
      mx-2
    "
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop')",
    }}
  >
    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/75 to-[#020617]/30"></div>

    {/* CONTENT */}
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-14">
        
        {/* LEFT CONTENT */}
        <div className="max-w-3xl">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 backdrop-blur-md rounded-full px-5 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold uppercase tracking-wide">
              Welcome to Gatherly
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            Find Your Next
            <br />
            <div>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Unforgettable  
            </span> 
              Experience
            </div>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
            Discover tech conferences, live concerts, workshops,
            and unforgettable experiences happening near you.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-white">
              <FaShieldAlt className="text-purple-400" />
              <span className="font-medium">Secure Booking</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <FaTicketAlt className="text-pink-400" />
              <span className="font-medium">Best Prices</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <FaHeadset className="text-indigo-400" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>

          {/* SEARCH */}
          
            {/* SEARCH BAR */}
            <div className="bg-white rounded-3xl p-4 flex flex-col lg:flex-row gap-4 mt-14 shadow-2xl max-w-6xl">
              {/* SEARCH INPUT */}
              <div className="flex items-center gap-4 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 px-4 py-2">
                <FaSearch className="text-gray-400 text-xl" />

                <input
                  type="text"
                  placeholder="Search events by title, artist, or keyword..."
                  className="w-full outline-none text-lg text-gray-700"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-3 px-4 py-2 lg:border-r border-gray-200">
                <FaMapMarkerAlt className="text-gray-400" />

                <select className="outline-none text-gray-700 bg-transparent">
                  <option>All Locations</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                </select>
              </div>

              {/* DATE */}
              <div className="flex items-center gap-3 px-4 py-2 lg:border-r border-gray-200">
                <FaCalendarAlt className="text-gray-400" />

                <select className="outline-none text-gray-700 bg-transparent">
                  <option>All Dates</option>
                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>

              {/* BUTTON */}
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02] transition-all text-white font-semibold px-10 py-4 rounded-2xl">
                Search →
              </button>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                "Music Festivals",
                "Tech Conferences",
                "Workshops",
                "Theater",
                "Sports",
              ].map((tag) => (
                <div
                  key={tag}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 text-white text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>



        </div>
      </div>
    </div>
  </div>
</section>

      {/* UPCOMING EVENTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900">
              Upcoming Events
            </h2>

            <p className="text-gray-500 mt-2">
              Discover trending events happening around you
            </p>
          </div>

          <div className="text-gray-500 font-medium">
            {events.length} events
          </div>
        </div>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={
                    event.image ||
                    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm">
                  {event.ticketPrice === 0
                    ? "FREE"
                    : `₹${event.ticketPrice}`}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="text-sm uppercase tracking-widest text-purple-600 font-bold mb-2">
                  {event.category}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h3>

                {/* INFO */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaCalendarAlt />
                    <span>
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* SEATS */}
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full"
                      style={{
                        width: `${
                          (event.availableSeats / event.totalSeats) * 100
                        }%`,
                      }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    {event.availableSeats} seats remaining
                  </p>
                </div>

                {/* BUTTON */}
                <Link
                  to={`/events/${event._id}`}
                  className="block text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-semibold py-4 rounded-2xl transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] text-white mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* BRAND */}
            <div className="max-w-md">
              <h2 className="text-3xl font-black mb-4">Gatherly</h2>

              <p className="text-gray-400 leading-relaxed">
                Discover and book unforgettable experiences around the
                world with a modern event platform built for explorers.
              </p>
            </div>

            {/* LINKS */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold mb-4">Platform</h4>

                <div className="space-y-3 text-gray-400">
                  <p>Events</p>
                  <p>Categories</p>
                  <p>Pricing</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4">Company</h4>

                <div className="space-y-3 text-gray-400">
                  <p>About</p>
                  <p>Contact</p>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} Gatherly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;