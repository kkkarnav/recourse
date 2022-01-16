import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';

// schema for course json
interface Course {
	name: String,
	semester: String,
	department: String,
	ratings: {
		sample_size: Number,
		engaging: Number,
		interesting_material: Number,
		grading: Number,
		workload: Number,
		attendance: Number,
		TFs: Number,
		holistic: Number,
		compound_score: Number
	}
}

const getCourse = async (request: Request, response: Response, next: NextFunction) => {

	// the id of the course passed via url
	let id: string = request.params.id;
	
	// placeholder data
	// to be replaced with database (mongoose?) calls
	let course: Course = 
	{
		name: "Quantitative Reasoning & Mathematical Thinking",
		semester: "Monsoon 2021",
		department: "FC",
		ratings: {
			sample_size: 15,
			engaging: 4.47,
			interesting_material: 4.80,
			grading: 3.20,
			workload: 2.80,
			attendance: 4.47,
			TFs: 4.07,
			holistic: 4.40,
			compound_score: 4.16
		}
	};

	// respond with course json
	return response.status(200).json({
		message: course
	});
};

export default {getCourse};
