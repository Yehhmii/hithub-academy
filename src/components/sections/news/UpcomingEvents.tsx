"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    month: string;
    day: string;
}

const upcomingEvents: Event[] = [
    {
        id: "1",
        title: "Spring Open House",
        date: "Feb 15",
        time: "10:00 AM - 2:00 PM",
        location: "Main Campus",
        month: "FEB",
        day: "15",
    },
    {
        id: "2",
        title: "Mass for All Saints' Day",
        date: "Feb 18",
        time: "9:00 AM",
        location: "School Chapel",
        month: "FEB",
        day: "18",
    },
    {
        id: "3",
        title: "Parent-Teacher Conference",
        date: "Feb 22",
        time: "3:00 PM - 7:00 PM",
        location: "Various Classrooms",
        month: "FEB",
        day: "22",
    },
];

export default function UpcomingEvents() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full min-w-0"
        >
            <div className="w-full bg-white rounded-3xl p-5 md:p-6 shadow-lg border border-gray-100">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                            Upcoming Events
                        </h3>
                    </div>
                    <Link
                        href="/events"
                        className="text-blue-600 hover:text-blue-700 text-xs md:text-sm font-semibold"
                    >
                        View All
                    </Link>
                </div>


                {/* Events List */}
                <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        >
                            <Link
                                href={`/events/${event.id}`}
                                className="group flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200"
                            >
                                {/* Date Box */}
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex flex-col items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-xs font-semibold opacity-90">
                                        {event.month}
                                    </span>
                                    <span className="text-2xl font-bold leading-none">
                                        {event.day}
                                    </span>
                                </div>

                                {/* Event Details */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 truncate">
                                        {event.title}
                                    </h4>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-1 text-xs text-gray-600">
                                            <Clock className="w-3 h-3" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-gray-600">
                                            <MapPin className="w-3 h-3" />
                                            <span className="truncate">{event.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ChevronRight className="w-5 h-5 text-blue-600" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View Calendar CTA */}
                <Link
                    href="/calendar"
                    className={cn(
                        "mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold",
                        "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
                        "hover:from-blue-700 hover:to-blue-800",
                        "shadow-lg hover:shadow-xl transition-all duration-300"
                    )}
                >
                    <Calendar className="w-5 h-5" />
                    <span>View Full Calendar</span>
                </Link>
            </div>
        </motion.div>
    );
}