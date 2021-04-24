"use strict";

exports.handler = async (event, context) => {
    console.log(`Node version is: ${process.version}`);
    return {
        version: process.version,
        env: process.env
    };
}
