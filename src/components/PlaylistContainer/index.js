import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlayListContainer = props => {
  const {playListDetails, removePlayList} = props
  const {imageUrl, name, genre, duration, id} = playListDetails

  const onClickDeleteItem = () => {
    removePlayList(id)
  }

  return (
    <>
      <li className="list-container">
        <div className="first">
          <img src={imageUrl} alt="track" className="image-size" />
          <div className="name-heading">
            <h1 className="song-name">{name}</h1>
            <p className="genre-name">{genre}</p>
          </div>
        </div>
        <div className="second">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-icon"
            onClick={onClickDeleteItem}
            data-testid="delete"
          >
            <AiOutlineDelete size={22} />
          </button>
        </div>
      </li>
    </>
  )
}

export default PlayListContainer
