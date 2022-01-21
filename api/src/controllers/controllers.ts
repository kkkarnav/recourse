import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';
import mongoose from 'mongoose';
import {Course} from '../models/course/model';

console.log("in controllers");

const getCourses = async (request: Request, response: Response, next: NextFunction) => {

	console.log(mongoose.connection.readyState);

	// the id of the course passed via url
	let id: string = request.params.id;

	// mongoose schema call
	const courses = await Course.find({}).exec();

	// respond with course json
	return response.status(200).json({
		data: courses
	});
};

export default {getCourses};
