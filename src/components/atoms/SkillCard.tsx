import Image from 'next/image';
import {
    LinkedIn,
    GitHub,
    Instagram
} from '@mui/icons-material';
import react from "image/react.png";

export default function SkillCard() {

    return (
        <div className="card">
            <div className="background">
            </div>
            <p className="logo whitespace-nowrap">
                React
                <Image src={react} alt='rightArrow' className='w-16 h-12' />
            </p>

            <a href="#"><div className="box box1"><span className="icon">90%</span></div></a>

            <a href="##"><div className="box box2"> <span className="icon"><LinkedIn /></span></div></a>

            <a href="###"><div className="box box3"><span className="icon"><LinkedIn /></span></div></a>

            <div className="box box4"></div>
        </div>
    );
}
