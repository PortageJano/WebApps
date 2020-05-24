import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function SubmissionBox(props) {
  return(
    <React.Fragment>
      <Box
        bgcolor="none"
        color="white"
        p={2}
        position="absolute"
        top={0}
        right="0%"
        height="100%"
        width={200}
      >
        <Box
          bgcolor="none"
          color="black"
          p={2}
          position="absolute"
          top={100}
          right="0%"
          height={200}
          width={200}
        >
          Enter bike id to figure out where you went on the divvy bike
      <TextField
            id="standard-basic"
            label="Enter ID"
            value={props.valz}
            onChange={e => this.setState({ valz: e.target.value })}
          />
          <Box
            bgcolor="grey"
            color="white"
            p={2}
            position="absolute"
            top={110}
            right="14%"
            height={50}
            width={50}
          >
            <Button
              anchor="right"
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => this.clickHandler(props.valz)}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );

}