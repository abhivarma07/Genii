import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Projects from "./Projects";
import ProjectsNext from "./ProjectsNext"; 
import ComplaintNext from "./ComplaintNext";
import Complaint from "./Complaint";
import Options from './Options';
import Work from "./workAllotment" ;

const Screens={

    Options:{

        screen:Options,
        
    },
    Project:{

        screen:Projects
    },
    ProjectNext:{

        screen:ProjectsNext
    },
    Complaint:{

        screen:Complaint
    },
    ComplaintNext:{

        screen:ComplaintNext
    },

    WorkAllotment: {
        screen : Work
    }
}

const HomeStack= createStackNavigator(Screens);

export default createAppContainer(HomeStack);