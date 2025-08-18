import './styles.css';

type Props = {
    description: string
}

export default function TextArea({description} : Props){
    return(
        <div className='ms-area'>
            <div className='ms-area-content'>
                <p>{description}</p>
            </div>
        </div>
    )
}