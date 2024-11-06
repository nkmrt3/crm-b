const mongoose = require('mongoose');
const { Customer, Opportunity, User, Interaction, Task, Team } = require('./pages/Mongo.js');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CRM', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample data for each collection
const sampleCustomerData = {
  CustomerID: 1,
  CompanyName: 'Sample Company',
  ContactName: 'John Doe',
  ContactEmail: 'john.doe@example.com',
  ContactPhone: '123-456-7890',
  Industry: 'Technology',
  Location: 'Sample Location',
  CreatedDate: new Date(),
  Notes: 'This is a sample customer.',
}
const sampleOpportunityData = {
    OpportunityID: 1,
    Customer: new mongoose.Types.ObjectId('654e1458f93faa4d3d6142ae'), // Corrected: Remove the new keyword
    ContactName: 'Jane Doe',
    OpportunityName: 'Sample Opportunity',
    Stage: 'Prospect',
    Value: 50000,
    CloseDate: new Date(),
    CreatedDate: new Date(),
    Notes: 'This is a sample opportunity.',
  };

  const sampleUserData = {
    UserID: 1,
    Username: 'sampleuser',
    Password: 'samplepassword',
    Email: 'sampleuser@example.com',
    FirstName: 'Sample',
    LastName: 'User',
    JobTitle: 'Developer',
    Department: 'IT',
    Phone: '987-654-3210',
    HireDate: new Date(),
    Role: 'Admin',
  };

  const sampleInteractionData = {
    InteractionID: 1,
    Customer: new mongoose.Types.ObjectId('654e1458f93faa4d3d6142ae'),
    ContactName: 'Alice Smith',
    Type: 'Meeting',
    InteractionDate: new Date(),
    Participants: [new mongoose.Types.ObjectId('654e16daa0276d5f14b628cf')],
    Notes: 'This is a sample interaction.',
  };

  const sampleTaskData = {
    TaskID: 1,
    Title: 'Sample Task',
    Description: 'This is a sample task.',
    DueDate: new Date(),
    Assignee: 'John Doe',
    Status: 'Pending',
    CreatedDate: new Date(),
  };
  
  async function addSampleDocuments() {
    try {
      const team = await Team.create(sampleTeamData);
      console.log('Sample Team added:', team);
    } catch (error) {
      console.error('Error adding sample documents:', error);
    } finally {
      // Close the connection after adding samples
      mongoose.connection.close();
    }
  }

  const sampleTeamData = {
    TeamID: 1,
    TeamName: 'Sample Team',
    TeamLead: new mongoose.Types.ObjectId('654e16daa0276d5f14b628cf'), // Replace with the actual ObjectID
    TeamMembers: [new mongoose.Types.ObjectId('654e16daa0276d5f14b628cf')], // Replace with the actual ObjectIDs
  };
  
  // Call the function to add sample documents
  addSampleDocuments();
  
  
  
  
  