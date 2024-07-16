import express from 'express';
import useRoutes from './routes/userRoutes.js';
import squadRoutes from './routes/squadRoutes.js'

const app = express();

app.use(express.json());
app.use('/users', useRoutes);
app.use('/squads', squadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});