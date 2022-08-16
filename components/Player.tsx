import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text
} from '@chakra-ui/react';
import ReactHowler from 'react-howler';
import { useEffect, useRef, useState } from 'react';
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat
} from 'react-icons/md';
import { useStoreActions } from 'easy-peasy';

const Player = ({ songs, activeSong }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seekValue, setSeekValue] = useState(0.0);
  const [isRepeatActive, setIsRepeatActive] = useState(false);
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const onShuffle = () => setIsShuffleActive(state => !state);
  const onRepeat = () => setIsRepeatActive(state => !state);

  return (
    <Box>
      <Box>
        {/* <ReactHowler playing={isPlaying} src={activeSong?.url} /> */}
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            icon={<MdShuffle />}
            color={isShuffleActive ? 'green.400' : 'inherit'}
            onClick={onShuffle}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip to previous"
            fontSize="24px"
            icon={<MdSkipPrevious />}
          />
          {isPlaying ? (
            <IconButton
              outline="none"
              variant="link"
              aria-label="pause"
              fontSize="40px"
              color="white"
              icon={<MdOutlinePauseCircleFilled />}
              onClick={() => setIsPlaying(false)}
            />
          ) : (
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="40px"
              color="white"
              icon={<MdOutlinePlayCircleFilled />}
              onClick={() => setIsPlaying(true)}
            />
          )}
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip to next"
            fontSize="24px"
            icon={<MdSkipNext />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            icon={<MdOutlineRepeat />}
            color={isRepeatActive ? 'green.400' : 'inherit'}
            onClick={onRepeat}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box marginRight={4}>
            <Text fontSize="xs">1:21</Text>
          </Box>
          <RangeSlider
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={['min', 'max']}
            step={0}
            min={0}
            max={321}
            id="player-range"
          >
            <RangeSliderTrack bg="gray.800">
              <RangeSliderFilledTrack bg="gray.600" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
          </RangeSlider>
          <Box marginLeft={4}>
            <Text fontSize="xs">5:21</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Player;
