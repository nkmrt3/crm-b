
import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017/CRM', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => 
    console.log('MongoDB Connected'))
  .catch( error => 
    console.log(error)
  );


// Customer Schema
const customerSchema = new mongoose.Schema({
  CustomerID: { type: Number, required: true, unique: true },
  CompanyName: { type: String, required: true },
  ContactName: { type: String, required: true },
  ContactEmail: { type: String },
  ContactPhone: { type: String },
  Industry: { type: String },
  Location: { type: String },
  CreatedDate: { type: Date },
  Notes: { type: String },
});

const Customer = mongoose.model('Customer', customerSchema);

// Opportunity Schema
const opportunitySchema = new mongoose.Schema({
  OpportunityID: { type: Number, required: true, unique: true },
  Customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  ContactName: { type: String },
  OpportunityName: { type: String },
  Stage: { type: String },
  Value: { type: Number },
  CloseDate: { type: Date },
  CreatedDate: { type: Date },
  Notes: { type: String },
});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);

// Users Schema
const userSchema = new mongoose.Schema({
  UserID: { type: Number, required: true, unique: true },
  Username: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  FirstName: { type: String },
  LastName: { type: String },
  JobTitle: { type: String },
  Department: { type: String },
  Phone: { type: String },
  HireDate: { type: Date },
  Role: { type: String },
});
const Users = mongoose.model('User', userSchema);

// Interaction Schema
const interactionSchema = new mongoose.Schema({
  InteractionID: { type: Number, required: true, unique: true },
  Customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  ContactName: { type: String },
  Type: { type: String },
  InteractionDate: { type: Date },
  Participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  Notes: { type: String },
});

const Interaction = mongoose.model('Interaction', interactionSchema);

// Tasks Schema
const taskSchema = new mongoose.Schema({
  TaskID: { type: Number, required: true, unique: true },
  Title: { type: String, required: true },
  Description: { type: String },
  DueDate: { type: Date },
  Assignee: { type: String },
  Status: { type: String },
  CreatedDate: { type: Date },
});

const Task = mongoose.model('Task', taskSchema);

// Team Schema
const teamSchema = new mongoose.Schema({
  TeamID: { type: Number, required: true, unique: true },
  TeamName: { type: String, required: true },
  TeamLead: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  TeamMembers: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
});

const Team = mongoose.model('Team', teamSchema);

export {
  Customer,
  Opportunity,
  Users,
  Interaction,
  Task,
  Team,
};

