import mongoose from "mongoose"
import Teacher from "./teacherModel"

export interface ISubject {
    name: string,
    area: string,
    teacher_id?: mongoose.Schema.Types.ObjectId
}

export const SubjectSchema = new mongoose.Schema<ISubject>({
    name:{
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true,
        enum: ["humanScience", "language", "mathematic", "naturalScience"]
    },
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Teacher,
    }
})

const Subject = mongoose.model<ISubject>("Subject", SubjectSchema);
export default Subject;