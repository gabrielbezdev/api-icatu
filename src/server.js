import express from 'express';
import Routes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/users', Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});