#!/bin/bash

text="I will remember to lock my screen, the next time I leave my desk!"
delay=0.3

while : ; do
 for ((i = 0; i < ${#text}; i++)); do
     echo -n "${text:$i:1}"
     sleep $delay
 done
 echo
done
