import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="header_style" variant="dark" fixed="top" expand="md">
            <Navbar.Brand className="header_title">NUESS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">ホーム</Nav.Link>
                    <Nav.Link href="https://www.nara-edu.ac.jp/" target="_blank" rel='noopener noreferrer'>奈良教育大学HP</Nav.Link>
                    <Nav.Link href="https://www.nara-edu.ac.jp/ADMIN/KYOUMU/SYLLABUS/syllabus.htm" target="_blank" rel='noopener noreferrer'>奈良教育大学シラバス</Nav.Link>
                    <Nav.Link href="http://syllabusweb.nara-wu.ac.jp/syllabus/" target="_blank" rel='noopener noreferrer'>奈良女子大学シラバス</Nav.Link>
                    <Nav.Link href="https://www.nara-edu.ac.jp/students/class_info/" target="_blank" rel='noopener noreferrer'>授業に関するお知らせ</Nav.Link>
                    <Nav.Link as={Link} to="/change_log" >更新履歴</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;