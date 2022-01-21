import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';
import mongoose from 'mongoose';
import {Course} from '../models/course/model';

const getCourses = async (request: Request, response: Response, next: NextFunction) => {

	// mongoose schema call
	const courses = await Course.find({}).exec();

	// respond with course json
	return response.status(200).json({
		data: courses
	});
};

const getCourse = async (request: Request, response: Response, next: NextFunction) => {

	// the id of the course passed via url
	let course_code: string = request.params.id.toUpperCase();

	// mongoose schema call
	const course = await Course.find({"code": course_code}).exec();

	// respond with course json
	return response.status(200).json({
		data: course
	});
};

export default {getCourses, getCourse};
