import React from 'react';

import { Page, Card, Grid, Form, Button, Dropdown } from "tabler-react";

import SiteWrapper from './SiteWrapper';



function MainPage() {
  return (
    <SiteWrapper>
        <Form.Group label="Input Group">
            <Form.InputGroup>
                <Form.Input placeholder="Search for..." />
                <Form.InputGroupAppend>
                <Button
                    RootComponent="a"
                    color="primary"
                    href="http://www.google.com"
                >
                    Go!
                </Button>
                </Form.InputGroupAppend>
            </Form.InputGroup>
        </Form.Group>
    </SiteWrapper>
  );
}

export default MainPage;