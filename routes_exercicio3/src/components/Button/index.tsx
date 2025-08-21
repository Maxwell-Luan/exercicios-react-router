import './styles.css';

type Props = {
  description: string;
};

export default function Button({description} : Props){
    return(
        <div className='ms-button'>
            <p>{description}</p>
        </div>
    )
}