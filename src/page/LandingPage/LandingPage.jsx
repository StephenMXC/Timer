import { useNavigate } from 'react-router-dom';
import { PROJECT_LIST } from './landingPageConstants';
import './LandingPage.css';

const LandingPage = () => {

    const navigate = useNavigate();


    const handleNavigate = (path) => () => {
        navigate(path);
    }


    return (
        <div className="landing-page">
            {PROJECT_LIST.map((project) => (
                <div key={project.id} className="project-card" onClick={handleNavigate(project.path)}>
                    <h2>{project.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default LandingPage;
