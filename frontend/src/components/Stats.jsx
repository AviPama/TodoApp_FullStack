import React from "react";

function Stats({total, completed, pending}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Tasks */}
            <div className="bg-gray-600 border border-gray-500 rounded-lg shadow-xl p-6 text-center hover:border-green-600 transition">
                <div className="text-3xl font-bold text-green-400 mb-2">{total}</div>
                <div className="text-lg text-gray-400">Total Tasks</div>
            </div>

            {/* Completed Tasks */}
            <div className="bg-gray-600 border border-gray-500 rounded-lg shadow-xl p-6 text-center hover:border-green-600 transition">
                <div className="text-3xl font-bold text-green-400 mb-2">{completed}</div>
                <div className="text-lg text-gray-400">Completed</div>
            </div>

            {/* Pending Tasks */}
            <div className="bg-gray-600 border border-gray-500 rounded-lg shadow-xl p-6 text-center hover:border-green-600 transition">
                <div className="text-3xl font-bold text-green-400 mb-2">{pending}</div>
                <div className="text-lg text-gray-400">Pending</div>
            </div>
        </div>
    );
}

export default Stats;