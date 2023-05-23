import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Link from "next/link";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className='pages-menu'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Pages
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}> <Link href="/about-us">About Us</Link></MenuItem>
        <MenuItem onClick={handleClose}>   <Link href="/animator">Animator</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link href="/rules--of--play">Rules Of Play</Link></MenuItem>
        <MenuItem onClick={handleClose}>   <Link href="/book-an-app">Book A Party</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/pricing-plans">Pricing Plans</Link></MenuItem>
        <MenuItem onClick={handleClose}>  <Link href="/contact-us">Contact Us</Link> </MenuItem>
      </Menu>
    </div>
  );
}
