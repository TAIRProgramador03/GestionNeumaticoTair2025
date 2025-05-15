import React from 'react';
import { Dialog, DialogContent, TextField, Button } from '@mui/material';

interface ModalInputsNeuProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: { kilometraje: number; remanente: number; presionAire: number }) => void;
}

const ModalInputsNeu: React.FC<ModalInputsNeuProps> = ({ open, onClose, onSubmit }) => {
    const [kilometraje, setKilometraje] = React.useState<number>(0);
    const [remanente, setRemanente] = React.useState<number>(0);
    const [presionAire, setPresionAire] = React.useState<number>(0);

    const handleSubmit = () => {
        onSubmit({ kilometraje, remanente, presionAire });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <TextField
                    label="Kilometraje"
                    type="number"
                    value={kilometraje}
                    onChange={(e) => setKilometraje(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Remanente"
                    type="number"
                    value={remanente}
                    onChange={(e) => setRemanente(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Presión de Aire"
                    type="number"
                    value={presionAire}
                    onChange={(e) => setPresionAire(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Submit
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default ModalInputsNeu;
