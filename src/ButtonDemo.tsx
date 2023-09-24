import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';

export default function ButtonDemo() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <br />
      <Button variant="outlined" href="#text-buttons">
        Primary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#text-buttons">
        Link
      </Button>
      <br />
      <br />
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>

      <br />
      <br />
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>

      <Button
        onClick={() => {
          alert('test');
        }}
      >
        Click me
      </Button>
      <br />
      <br />
      <Button variant="contained" color="success">
        success
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="contained" color="error">
        error
      </Button>
      <br />
      <br />
      <Button variant="outlined" size="small">
        Small
      </Button>
      <Button variant="outlined" size="medium">
        Medium
      </Button>
      <Button variant="outlined" size="large">
        Large
      </Button>
      <br />
      <br />
      <Button variant="contained" startIcon={<DeleteIcon />}>
        DELETE
      </Button>
      <Button variant="contained" startIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" startIcon={<SearchIcon />}>
        Send
      </Button>
    </>
  );
}
