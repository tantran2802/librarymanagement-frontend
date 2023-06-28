import React from 'react';
import NotificationIcon from '../../assets/icons/notification.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState } from 'react';
function DashboardHeader({ btnText, onClick }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
        setModalIsOpen(true);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }
    return (
        <div className='dashbord-header-container'>
            {btnText &&
                <button className='dashbord-header-btn' onClick={deleteHandler}>{btnText}</button>
            }
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
            <div className='dashbord-header-right'>
                <img
                    src={NotificationIcon}
                    alt='notification-icon'
                    className='dashbord-header-icon' />
                <img
                    src={SettingsIcon}
                    alt='settings-icon'
                    className='dashbord-header-icon' />
                <img
                    className='dashbord-header-avatar'
                    src='https://media.istockphoto.com/id/1271339527/vector/book-education-template.jpg?s=612x612&w=0&k=20&c=yMcN2ByDLxRVaN55nHS1u5vJ6hVUugZ2c1c1IwYiBkg=' />
            </div>
        </div>
    )
}

export default DashboardHeader;