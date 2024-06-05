// Importa el archivo JSON directamente
import particlesConfig from '../../particlesjs-config.json';  // Ajusta la ruta según sea necesario
import { useEffect } from 'react'; // Add the missing import statement

declare global {
    interface Window {
        particlesJS: (id: string, config: ParticlesConfig) => void; // Specify the type for the config parameter
    }
}

// Define the type for the particlesConfig
type ParticlesConfig = {
    // Add the properties of the particlesConfig object
    // Example properties:
    particles: {
        number: {
            value: number;
        };
        size: {
            value: number;
        };
    };
};

const ParticlesBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('particles-js', particlesConfig);
        }
    }, []);

    return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default ParticlesBackground;
