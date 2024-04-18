// Importa el archivo JSON directamente
import particlesConfig from '../../particlesjs-config.json';  // Ajusta la ruta según sea necesario
import { useEffect } from 'react'; // Add the missing import statement

declare global {
    interface Window {
        particlesJS: (id: string, config: any) => void; // Declare the particlesJS property on the Window interface
    }
}

const ParticlesBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('particles-js', particlesConfig);
        }
    }, []);

    return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default ParticlesBackground;
