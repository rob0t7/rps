/**
Below are two implementations of the standard C function 'strcpy'.
The first implementation uses a loop while the second implementaion
uses recursion to perform the string copying. Here are some notes
about the two implementations.

1. The loop version is more efficient due to the extra memory taken up
   by recursive versions function call overhead (ie stackmemory that
   is used to call a function).

2. As noted, strcpy and these two version below can lead to some
  insecure and broken code.  The reason for this is simple.  If
  destination array size is not greater than or equal tostring length
  (the length of the array of source up to and including the 1st
  '\0'), then all three of these functions will cause a buffer
  overflow.  Whether the buffer overflow occurs on the stack or heap
  (depending on whether the destination string was allocated
  dynamically using malloc), different types of attacks can occur with
  symptoms ranging from corrupting data to providing root shell
  access.  That is why strncpy is a much safer function but it still
  exhibits this flaw to some extent.
 **/
char *
my_strcpy1(char *destination, const char *source)
{
    int i;
    for(i = 0; source[i] != '\0'; i++) {
        destination[i] = source[i];
    }
    destination[i] = '\0';
    return destination;
}

char *
my_strcpy2(char *destination, const char *source)
{
    *destination = *source;
    if (*source == '\0')
        return destination;
    else
        return my_strcpy2(destination+1, source+1) - 1;
}
