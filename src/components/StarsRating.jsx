
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const RatingStars = ({ rating }) => {

    const MAX_STARS = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<BsStarFill key={i} className="text-yellow-500" />);
        }
        if (hasHalfStar) {
            stars.push(<BsStarHalf key="half" className="text-yellow-500" />);
        }
        const remainingStars = MAX_STARS - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<BsStar key={i + fullStars + 1} className="text-gray-400" />);
        }
        return stars;
    };

    return <span className="flex items-center">{renderStars()}</span>;

};

export default RatingStars;
