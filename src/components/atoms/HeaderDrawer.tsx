'use client'

import { useState } from 'react';
import Image from "next/image";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';

import Home from "icon/home.gif";
import About from "icon/about.gif";
import Contact from "icon/contact.gif";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function HeaderDrawer() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'About', 'Contact'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index == 0 &&
                                    <Image
                                        src={Home}
                                        alt='Home'
                                        className='w-16 max-lg:w-12 h-16 max-lg:h-12 rounded-xl mr-4'
                                    />
                                }
                                {index == 1 &&
                                    <Image
                                        src={About}
                                        alt='About'
                                        className='w-16 max-lg:w-12 h-16 max-lg:h-12 rounded-xl mr-4'
                                    />
                                }
                                {index == 2 &&
                                    <Image
                                        src={Contact}
                                        alt='Contact'
                                        className='w-16 max-lg:w-12 h-16 max-lg:h-12 rounded-xl mr-4'
                                    />
                                }
                            </ListItemIcon>
                            <h6 className='font-semibold'>{text}</h6>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer("left", true)}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuOpenIcon className='text-[#e86830] text-4xl' />
                </IconButton>
            </Button>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>
        </div>
    );
}