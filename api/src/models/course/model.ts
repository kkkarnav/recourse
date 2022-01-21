import {mongoose} from '../../config/database';

interface course_interface extends mongoose.Document {
	code: String,
	conventional_code: String,
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

const course_schema = new mongoose.Schema({
	code: {type: String, "default": "DEP-0000-0"},
	conventional_code: {type: String, "default": "CN"},
	name: {type: String, "default": "Course Name"},
	semester: {type: String, "default": "Sem 20xx"},
	department: {type: String, "department": "DEP"},
	ratings: {
		sample_size: {type: Number, "default": 0},
		engaging: {type: Number, "default": 0},
		interesting_material: {type: Number, "default": 0},
		grading: {type: Number, "default": 0},
		workload: {type: Number, "default": 0},
		attendance: {type: Number, "default": 0},
		TFs: {type: Number, "default": 0},
		holistic: {type: Number, "default": 0},
		compound_score: {type: Number, "default": 0}
	}
});

export const Course = mongoose.model<course_interface>("Course", course_schema);
