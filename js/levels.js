/*
Levels found here:
https://github.com/leoliu/sokoban/blob/master/sokoban.levels
 */
Levels = function() {
	/**/
	const rawLevels =
`LEVEL 1
    #####
    #   #
    #$  #
  ###  $##
  #  $ $ #
### # ## #   ######
#   # ## #####  ..#
# $  $          ..#
##### ### #@##  ..#
    #     #########
    #######
;LEVEL 2
############
#..  #     ###
#..  # $  $  #
#..  #$####  #
#..    @ ##  #
#..  # #  $ ##
###### ##$ $ #
  # $  $ $ $ #
  #    #     #
  ############
;LEVEL 3
        ########
        #     @#
        # $#$ ##
        # $  $#
        ##$ $ #
######### $ # ###
#....  ## $  $  #
##...    $  $   #
#....  ##########
########
;LEVEL 4
           ########
           #  ....#
############  ....#
#    #  $ $   ....#
# $$$#$  $ #  ....#
#  $     $ #  ....#
# $$ #$ $ $########
#  $ #     #
## #########
#    #    ##
#     $   ##
#  $$#$$  @#
#    #    ##
###########
;LEVEL 5
        #####
        #   #####
        # #$##  #
        #     $ #
######### ###   #
#....  ## $  $###
#....    $ $$ ##
#....  ##$  $ @#
#########  $  ##
        # $ $  #
        ### ## #
          #    #
          ######
;LEVEL 6
######  ###
#..  # ##@##
#..  ###   #
#..     $$ #
#..  # # $ #
#..### # $ #
#### $ #$  #
   #  $# $ #
   # $  $  #
   #  ##   #
   #########
;LEVEL 7
       #####
 #######   ##
## # @## $$ #
#    $      #
#  $  ###   #
### #####$###
# $  ### ..#
# $ $ $ ...#
#    ###...#
# $$ # #...#
#  ### #####
####
;LEVEL 8
  ####
  #  ###########
  #    $   $ $ #
  # $# $ #  $  #
  #  $ $  #    #
### $# #  #### #
#@#$ $ $  ##   #
#    $ #$#   # #
#   $    $ $ $ #
#####  #########
  #      #
  #      #
  #......#
  #......#
  #......#
  ########
;LEVEL 9
          #######
          #  ...#
      #####  ...#
      #      . .#
      #  ##  ...#
      ## ##  ...#
     ### ########
     # $$$ ##
 #####  $ $ #####
##   #$ $   #   #
#@ $  $    $  $ #
###### $$ $ #####
     #      #
     ########
;LEVEL 10
 ###  #############
##@####       #   #
# $$   $$  $ $ ...#
#  $$$#    $  #...#
# $   # $$ $$ #...#
###   #  $    #...#
#     # $ $ $ #...#
#    ###### ###...#
## #  #  $ $  #...#
#  ## # $$ $ $##..#
# ..# #  $      #.#
# ..# # $$$ $$$ #.#
##### #       # #.#
    # ######### #.#
    #           #.#
    ###############
;LEVEL 11
          ####
     #### #  #
   ### @###$ #
  ##      $  #
 ##  $ $$## ##
 #  #$##     #
 # # $ $$ # ###
 #   $ #  # $ #####
####    #  $$ #   #
#### ## $         #
#.    ###  ########
#.. ..# ####
#...#.#
#.....#
#######
;LEVEL 12
################
#              #
# # ######     #
# #  $ $ $ $#  #
# #   $@$   ## ##
# #  $ $ $###...#
# #   $ $  ##...#
# ###$$$ $ ##...#
#     # ## ##...#
#####   ## ##...#
    #####     ###
        #     #
        #######
;LEVEL 13
   #########
  ##   ##  #####
###     #  #    ###
#  $ #$ #  #  ... #
# # $#@$## # #.#. #
#  # #$  #    . . #
# $    $ # # #.#. #
#   ##  ##$ $ . . #
# $ #   #  #$#.#. #
## $  $   $  $... #
 #$ ######    ##  #
 #  #    ##########
 ####
;LEVEL 14
       #######
 #######     #
 #     # $@$ #
 #$$ #   #########
 # ###......##   #
 #   $......## # #
 # ###......     #
##   #### ### #$##
#  #$   #  $  # #
#  $ $$$  # $## #
#   $ $ ###$$ # #
#####     $   # #
    ### ###   # #
      #     #   #
      ########  #
             ####
;LEVEL 15
   ########
   #   #  #
   #  $   #
 ### #$   ####
 #  $  ##$   #
 #  # @ $ # $#
 #  #      $ ####
 ## ####$##     #
 # $#.....# #   #
 #  $..**. $# ###
##  #.....#   #
#   ### #######
# $$  #  #
#  #     #
######   #
     #####
;LEVEL 16
#####
#   ##
#    #  ####
# $  ####  #
#  $$ $   $#
###@ #$    ##
 #  ##  $ $ ##
 # $  ## ## .#
 #  #$##$  #.#
 ###   $..##.#
  #    #.*...#
  # $$ #.....#
  #  #########
  #  #
  ####
;LEVEL 17
   ##########
   #..  #   #
   #..      #
   #..  #  ####
  #######  #  ##
  #            #
  #  #  ##  #  #
#### ##  #### ##
#  $  ##### #  #
# # $  $  # $  #
# @$  $   #   ##
#### ## #######
   #    #
   ######
;LEVEL 18
     ###########
     #  .  #   #
     # #.    @ #
 ##### ##..# ####
##  # ..###     ###
# $ #...   $ #  $ #
#    .. ##  ## ## #
####$##$# $ #   # #
  ## #    #$ $$ # #
  #  $ # #  # $## #
  #               #
  #  ###########  #
  ####         ####
;LEVEL 19
  ######
  #   @####
##### $   #
#   ##    ####
# $ #  ##    #
# $ #  ##### #
## $  $    # #
## $ $ ### # #
## #  $  # # #
## # #$#   # #
## ###   # # ######
#  $  #### # #....#
#    $    $   ..#.#
####$  $# $   ....#
#       #  ## ....#
###################
;LEVEL 20
    ##########
#####        ####
#     #   $  #@ #
# #######$####  ###
# #    ## #  #$ ..#
# # $     #  #  #.#
# # $  #     #$ ..#
# #  ### ##     #.#
# ###  #  #  #$ ..#
# #    #  ####  #.#
# #$   $  $  #$ ..#
#    $ # $ $ #  #.#
#### $###    #$ ..#
   #    $$ ###....#
   #      ## ######
   ########
;LEVEL 21
#########
#       #
#       ####
## #### #  #
## #@##    #
# $$$ $  $$#
#  # ## $  #
#  # ##  $ ####
####  $$$ $#  #
 #   ##   ....#
 # #   # #.. .#
 #   # # ##...#
 ##### $  #...#
     ##   #####
      #####
;LEVEL 22
######     ####
#    #######  #####
#   $#  #  $  #   #
#  $  $  $ # $ $  #
##$ $   # @# $    #
#  $ ########### ##
# #   #.......# $#
# ##  # ......#  #
# #   $........$ #
# # $ #.... ..#  #
#  $ $####$#### $#
# $   ### $   $  ##
# $     $ $  $    #
## ###### $ ##### #
#         #       #
###################
;LEVEL 23
    #######
    #  #  ####
##### $#$ #  ##
#.. #  #  #   #
#.. # $#$ #  $####
#.  #     #$  #  #
#..   $#  # $    #
#..@#  #$ #$  #  #
#.. # $#     $#  #
#.. #  #$$#$  #  ##
#.. # $#  #  $#$  #
#.. #  #  #   #   #
##. ####  #####   #
 ####  ####   #####
;LEVEL 24
###############
#..........  .####
#..........$$.#  #
###########$ #   ##
#      $  $     $ #
## ####   #  $ #  #
#      #   ##  # ##
#  $#  # ##  ### ##
# $ #$###    ### ##
###  $ #  #  ### ##
###    $ ## #  # ##
 # $  #  $  $ $   #
 #  $  $#$$$  #   #
 #  #  $      #####
 # @##  #  #  #
 ##############
;LEVEL 25
####
#  ##############
#  #   ..#......#
#  # # ##### ...#
##$#    ........#
#   ##$######  ####
# $ #     ######@ #
##$ # $   ######  #
#  $ #$$$##       #
#      #    #$#$###
# #### #$$$$$    #
# #    $     #   #
# #   ##        ###
# ######$###### $ #
#        #    #   #
##########    #####
;LEVEL 26
 #######
 #  #  #####
##  #  #...###
#  $#  #...  #
# $ #$$ ...  #
#  $#  #... .#
#   # $########
##$       $ $ #
##  #  $$ #   #
 ######  ##$$@#
      #      ##
      ########
;LEVEL 27
 #################
 #...   #    #   ##
##.....  $## # #$ #
#......#  $  #    #
#......#  #  # #  #
######### $  $ $  #
  #     #$##$ ##$##
 ##   $    # $    #
 #  ## ### #  ##$ #
 # $ $$     $  $  #
 # $    $##$ ######
 #######  @ ##
       ######
;LEVEL 28
         #####
     #####   #
    ## $  $  ####
##### $  $ $ ##.#
#       $$  ##..#
#  ###### ###.. #
## #  #    #... #
# $   #    #... #
#@ #$ ## ####...#
####  $ $$  ##..#
   ##  $ $  $...#
    # $$  $ #  .#
    #   $ $  ####
    ######   #
         #####
;LEVEL 29
#####
#   ##
# $  #########
## # #       ######
## #   $#$#@  #   #
#  #      $ #   $ #
#  ### ######### ##
#  ## ..*..... # ##
## ## *.*..*.* # ##
# $########## ##$ #
#  $   $  $    $  #
#  #   #   #   #  #
###################
;LEVEL 30
       ###########
       #   #     #
#####  #     $ $ #
#   ##### $## # ##
# $ ##   # ## $  #
# $  @$$ # ##$$$ #
## ###   # ##    #
## #   ### #####$#
## #     $  #....#
#  ### ## $ #....##
# $   $ #   #..$. #
#  ## $ #  ##.... #
#####   ######...##
    #####    #####
;LEVEL 31
  ####
  #  #########
 ##  ##  #   #
 #  $# $@$   ####
 #$  $  # $ $#  ##
##  $## #$ $     #
#  #  # #   $$$  #
# $    $  $## ####
# $ $ #$#  #  #
##  ###  ###$ #
 #  #....     #
 ####......####
   #....####
   #...##
   #...#
   #####
;LEVEL 32
      ####
  #####  #
 ##     $#
## $  ## ###
#@$ $ # $  #
#### ##   $#
 #....#$ $ #
 #....#   $#
 #....  $$ ##
 #... # $   #
 ######$ $  #
      #   ###
      #$ ###
      #  #
      ####
;LEVEL 33
############
##     ##  #
##   $   $ #
#### ## $$ #
#   $ #    #
# $$$ # ####
#   # # $ ##
#  #  #  $ #
# $# $#    #
#   ..# ####
####.. $ #@#
#.....# $# #
##....#  $ #
###..##    #
############
;LEVEL 34
 #########
 #....   ##
 #.#.#  $ ##
##....# # @##
# ....#  #  ##
#     #$ ##$ #
## ###  $    #
 #$  $ $ $#  #
 # #  $ $ ## #
 #  ###  ##  #
 #    ## ## ##
 #  $ #  $  #
 ###$ $   ###
   #  #####
   ####
;LEVEL 35
############ ######
#   #    # ###....#
#   $$#   @  .....#
#   # ###   # ....#
## ## ###  #  ....#
 # $ $     # # ####
 #  $ $##  #      #
#### #  #### # ## #
#  # #$   ## #    #
# $  $  # ## #   ##
# # $ $    # #   #
#  $ ## ## # #####
# $$     $$  #
## ## ### $  #
 #    # #    #
 ###### ######
;LEVEL 36
            #####
#####  ######   #
#   ####  $ $ $ #
# $   ## ## ##  ##
#   $ $     $  $ #
### $  ## ##     ##
  # ##### #####$$ #
 ##$##### @##     #
 # $  ###$### $  ##
 # $  #   ###  ###
 # $$ $ #   $$ #
 #     #   ##  #
 #######.. .###
    #.........#
    #.........#
    ###########
;LEVEL 37
###########
#......   #########
#......   #  ##   #
#..### $    $     #
#... $ $ #   ##   #
#...#$#####    #  #
###    #   #$  #$ #
  #  $$ $ $  $##  #
  #  $   #$#$ ##$ #
  ### ## #    ##  #
   #  $ $ ## ######
   #    $  $  #
   ##   # #   #
    #####@#####
        ###
;LEVEL 38
      ####
####### @#
#     $  #
#   $## $#
##$#...# #
 # $...  #
 # #. .# ##
 #   # #$ #
 #$  $    #
 #  #######
 ####
;LEVEL 39
             ######
 #############....#
##   ##     ##....#
#  $$##  $ @##....#
#      $$ $#  ....#
#  $ ## $$ # # ...#
#  $ ## $  #  ....#
## ##### ### ##.###
##   $  $ ##   .  #
# $###  # ##### ###
#   $   #       #
#  $ #$ $ $###  #
# $$$# $   # ####
#    #  $$ #
######   ###
     #####
;LEVEL 40
    ############
    #          ##
    #  # #$$ $  #
    #$ #$#  ## @#
   ## ## # $ # ##
   #   $ #$  # #
   #   # $   # #
   ## $ $   ## #
   #  #  ##  $ #
   #    ## $$# #
######$$   #   #
#....#  ########
#.#... ##
#....   #
#....   #
#########
;LEVEL 41
           #####
          ##   ##
         ##     #
        ##  $$  #
       ## $$  $ #
       # $    $ #
####   #   $$ #####
#  ######## ##    #
#.            $$$@#
#.# ####### ##   ##
#.# #######. #$ $##
#........... #    #
##############  $ #
             ##  ##
              ####
;LEVEL 42
     ########
  ####      ######
  #    ## $ $   @#
  # ## ##$#$ $ $##
### ......#  $$ ##
#   ......#  #   #
# # ......#$  $  #
# #$...... $$# $ #
#   ### ###$  $ ##
###  $  $  $  $ #
  #  $  $  $  $ #
  ######   ######
       #####
;LEVEL 43
        #######
    #####  #  ####
    #   #   $    #
 #### #$$ ## ##  #
##      # #  ## ###
#  ### $#$  $  $  #
#...    # ##  #   #
#...#    @ # ### ##
#...#  ###  $  $  #
######## ##   #   #
          #########
;LEVEL 44
 #####
 #   #
 # # #######
 #      $@######
 # $ ##$ ###   #
 # #### $    $ #
 # ##### #  #$ ####
##  #### ##$      #
#  $#  $  # ## ## #
#         # #...# #
######  ###  ...  #
     #### # #...# #
          # ### # #
          #       #
          #########
;LEVEL 45
##### ####
#...# #  ####
#...###  $  #
#....## $  $###
##....##   $  #
###... ## $ $ #
# ##    #  $  #
#  ## # ### ####
# $ # #$  $    #
#  $ @ $    $  #
#   # $ $$ $ ###
#  ######  ###
# ##    ####
###
;LEVEL 46
##########
#        ####
# ###### #  ##
# # $ $ $  $ #
#       #$   #
###$  $$#  ###
  #  ## # $##
  ##$#   $ @#
   #  $ $ ###
   # #   $  #
   # ##   # #
  ##  ##### #
  #         #
  #.......###
  #.......#
  #########
;LEVEL 47
         ####
 #########  ##
##  $      $ #####
#   ## ##   ##...#
# #$$ $ $$#$##...#
# #   @   #   ...#
#  $# ###$$   ...#
# $  $$  $ ##....#
###$       #######
  #  #######
  ####
;LEVEL 48
  #########
  #*.*#*.*#
  #.*.*.*.#
  #*.*.*.*#
  #.*.*.*.#
  #*.*.*.*#
  ###   ###
    #   #
###### ######
#           #
# $ $ $ $ $ #
## $ $ $ $ ##
 #$ $ $ $ $#
 #   $@$   #
 #  #####  #
 ####   ####
;LEVEL 49
       ####
       #  ##
       #   ##
       # $$ ##
     ###$  $ ##
  ####    $   #
###  # #####  #
#    # #....$ #
# #   $ ....# #
#  $ # #.*..# #
###  #### ### #
  #### @$  ##$##
     ### $     #
       #  ##   #
       #########
;LEVEL 50
      ############
     ##..    #   #
    ##..* $    $ #
   ##..*.# # # $##
   #..*.# # # $  #
####...#  #    # #
#  ## #          #
# @$ $ ###  #   ##
# $   $   # #   #
###$$   # # # # #
  #   $   # # #####
  # $# #####      #
  #$   #   #    # #
  #  ###   ##     #
  #  #      #    ##
  ####      ######
;LEVEL 51
#########
#       #
#  $   $#
####    #
   # $  ##
####   $ #
#.. $ ## ####
#..  $##    #
#..    $    #
#.###$### #@#
#.# #     ###
### #######
;LEVEL 52
####################
#  ##########     @#
# $#    #     ######
#      ####   #  ###
#####         #  ###
#   $         #  ###
#  $####  #   #    #
# # #  #..#$###  # #
# # #$ #..#  $  $$ #
#      #..#  #   # #
#   #  #..#  #   # #
####################
;LEVEL 53
####################
#                ###
# $#   $ ##  $    ##
#    $###    # $$ ##
#.###     $ $ ##  ##
#...#  #  #    #$  #
#..##$$#### $  #   #
#...#      $ ##  ###
#...$  ###  #    # #
##..  $#  ##   ##@ #
###.#              #
####################
;LEVEL 54
####################
#   #    #   #   #@#
# $      $   $   # #
## ###..## ###     #
#   #....#$#  $### #
# $ #....#  $  $ $ #
#   #....# # # $ $ #
#   ##..##   #$#   #
##$##    ##  #  #$##
#   $  $     #  #  #
#   #    #   #     #
####################
;LEVEL 55
####################
#    @##      #   ##
#    ##    $    $ ##
#  ###....# # #  ###
#   #....# # # $   #
### #...#  #       #
##  ##.#     $   $ #
##  $ $ ###  # # ###
## $       # # $   #
#### $  $# # # # $ #
####         # #  ##
####################
;LEVEL 56
####################
#  #  ##    #   @###
##    $    # $###  #
##$# $ ##$# $ $    #
#   $#    $      ###
# ##   $ ###  #....#
# # $# # # # #....##
#    $ $ #  #....###
##$ ###  $ #....####
#  # $        ######
#      # #    ######
####################
;LEVEL 57
####################
#@     ###   #  #  #
# # #  #  $  $     #
#####     # $ $#$# #
#.#..#    ##$ $    #
#.....    $   #   ##
#.....    ###$##$###
#.#..#    $    #   #
#####     #  #$  $ #
#####  #  $    $ $ #
#####  #  #  #  #  #
####################
;LEVEL 58
####################
##...   ## #    #  #
#....         $ ## #
#....# # #$###$    #
#...#    #       # #
##.#  #$ #     $## #
#  #  # $ $ ###  $ #
#     $  $ #  # ## #
## # ## #$$# $#  # #
#  #   $ $ #      ##
#    #     #  #   @#
####################
;LEVEL 59
####################
#   #  #@# ##  #####
# # #  $    $  #####
# #    ###### $  ###
#   #  #....#  $$  #
##$##$##....#      #
#      #....##$##$##
#  $$  #....#      #
# $  $  #  #  ###  #
#####  $   $    $  #
##### #    #  #   ##
####################
;LEVEL 60
####################
# #     #          #
#       $  ## ### ##
#####  ##   $  $   #
##..##  # # $ # #  #
#....  $     ##$# ##
#....  $#####   #$##
##..# #  #   #  $  #
###.# #  $   $  # @#
##  $  $ #   #  ####
##       ###########
####################
;LEVEL 61
####################
#     ###..###     #
# $$  ###..###  $@ #
#  # ##......#  $  #
#     #......#  $  #
####  ###..######$ #
#   $$$ #..#    #  #
# $#   $  $  $$ #$ #
#  #  ## $  ##  #  #
# $    $ ## $    $ #
#  #  ##    ##  #  #
####################
;LEVEL 62
####################
#    #  # #  #  #  #
# @# # ## $   $   ##
#### #    #  # $   #
#    # ## #$ ## ## #
#      $   $   $   #
#..###$$## $##$ ## #
#..#.#  # $   $ #  #
#....# $$   ##$ ####
#....#  #####      #
#...###        ##  #
####################
;LEVEL 63
####################
#....#       #  #  #
#....# # $  $      #
#.... ##  $# # $#$ #
#...#   $   $#  $  #
#..####  # $   $$  #
#      #### #### ###
#        #   #     #
# ##   #   $ # $ $ #
# ##    $ ## $  $  #
#     @#     #   # #
####################
;LEVEL 64
####################
#....###           #
#....##### #  #$# ##
#....###   #$  $   #
#....###    $  #$$##
##  #### $#  #$ $  #
##  ####  $  $  #  #
#@  ####$###$## $  #
##        #  #  $  #
##   ###  #  $  ####
########  #  #     #
####################
;LEVEL 65
####################
#     #     @#...###
#     #      ##...##
# # # ##$## ## ....#
#   $ #   $$$  ....#
###$### $$  ### ##.#
#     $  #    # ####
#  $  #  ###  # #  #
## #$##    $  $$   #
#   $ ##   #  # #  #
#     #    #  #    #
####################
;LEVEL 66
####################
#     #  #...#@    #
# #       ....#    #
#  $  #   #....#   #
# ##$#### ##....#  #
# $   $  #  #...#  #
# $$ #   #   # $$  #
###  $$$#   $$  $  #
# $  #  #    # $#  #
#   $#  #       $  #
#  #    #    #  #  #
####################
;LEVEL 67
####################
#####@###.##...##  #
#####$  ..#...#    #
####    ......#  $ #
###  $ #.....## # ##
##  $$# #####  $ $ #
## $# $    ##  $$  #
##  #  #    # $  $ #
##   $$ ### #$##   #
## $#      $ $  $ ##
###    #    #    ###
####################
;LEVEL 68
####################
#@     #   #       #
## ### ##  #### # ##
#    # #  $$       #
#  # # # $ # $ ## ##
#     $ #  #$$ #   #
#  ###  #      ## ##
#..#.# $ #  $ #    #
#..#.#  $ # ## $$  #
#....##   $$  $  # #
#.....##        #  #
####################
;LEVEL 69
####################
#  #      #   #   ##
# $# $ $ ##...$  $ #
#  $  # ##....# $  #
# ## $ ##....#   $ #
# $    #....## $   #
# $##  #...#       #
#   $$$##$##  ### ##
# # #  #   #  #    #
# $ #  $  ##       #
#    #    #@       #
####################
;LEVEL 70
####################
#  #  # #    #  #  #
#   $      $ $     #
## #  #$###$##  ## #
#   $     $  #  $  #
# ###$##$#   # $   #
# #   $ $  ###### $#
# $  $$ $  #@#.#...#
# #     #  # #.#...#
# ########## #.....#
#            #.....#
####################
;LEVEL 71
####################
#  #     #  ##    ##
# $#   $ #     ##  #
# $  $  #..#     $ #
# $ $  #....#   # ##
# $#  #......### $ #
#   #  #....#  #$  #
# $  ####..#   #   #
## $   ## # # $  $##
### $    $#@$ $#   #
####   #       #   #
####################
;LEVEL 72
####################
#      ....#    ####
#      ....        #
# # ##########     #
# #$   #      ###..#
#  $   #$$###   #..#
# $ ### $   $   #..#
# $ #   $ $ #  ##..#
#  #  $$ # $ ##   ##
#@## $#  $  $     ##
##       ##   #  ###
####################
;LEVEL 73
####################
#        #   #@ #  #
# $$  #$$# # #  ## #
#  # $ $ #$$ #     #
## #  #  # # #  #  #
#   ##       #     #
#   # $ #   #   #  #
# $ #$ #   #  $ #..#
##$ #  ####    #...#
#  $          #....#
#   #  #     #.....#
####################
;LEVEL 74
####################
#     #   #####    #
## $  #   ####  $  #
#### $$   #..#  #  #
#  $  $  ##..#### ##
# $   ###....   $$ #
#  #$#   ....# # $ #
# #  # $ ..###$#   #
# #   $ #..#   ##  #
#   $#  ####   # $##
# #  #    @#      ##
####################
;LEVEL 75
####################
#   #   #    #   #@#
#   $  $     # $ # #
##$# $### #    $$# #
#  #  #.###  #$ $  #
#  #$#....#  # ### #
# $  #.....##    # #
##$  #.#....#$$ $  #
#  ######..## #  # #
#  $         $ ### #
#   #   #        # #
####################
;LEVEL 76
####################
# # # #   #@##   # #
#             $    #
#  ##$# ##### $ # ##
##    ##.....#  #  #
##$##$#.....###$#$ #
#   # ##.....#  # ##
#  $    ##..##  #  #
# $ #   $   $  $$$ #
## $  $# #  #  $   #
#   ##   #  #      #
####################
;LEVEL 77
######  #####
#    #  #   #
# $  #### $ #
# $      $  #
#  ###@###$ #
########## ###
#..   ##     #
#..   ##$    #
#..   ## $   #
#..   ## $   #
#..     $ $  #
###  #########
  ####
;LEVEL 78
       ###########
       #         #
       #    $ $  #
###### # $ ##### #
#    ##### $  ##$#
#       $ $      #
#          ## ## #
#    ##@##### ## #
#    ####   # ## ##
#....#      # $   #
#....#      #     #
######      #######
;LEVEL 79
#############
#           #
# ### $$    #
#   # $  $  #
#  $####$######
# $ ##        #####
#  $$ $        ...#
### ## $$#     ...#
  # ##   #     ...#
  #      #     ...#
  ###@#############
    ###
;LEVEL 80
  #################
###@##         ...#
#    #         ...#
# $  #         ...#
# $$ #         ...#
## $ ###$##########
 # ###  $ #
##   $  $ #
#  $ #  $ #
# $  #    #
#  $ #    #
#    #    #
###########
;LEVEL 81
              #####
     ##########   #
     #        #   #
     #  $ $    $$ #
     # ##### ## $ #
     #$$   #$## $ #
     # ### # ##$  #
###### ### $ $    #
#....        ##   #
#....        ######
#....        #
###########@##
          ###
;LEVEL 82
    ######
 ####    #
 #    ## #
 # $     #
### #### ########
#  $   $ ##  ...#
#   $$ $$    ...#
#    $  $##  ...#
##@## ## ##  ...#
 ###  $  ########
 #   $$  #
 #    #  #
 #########
;LEVEL 83
####### #########
#     # #   ##  #
# ### # #   $   #
# # $ ###   $   #
#   $$      ##$ #
#    ####   ##  #
#@############ ##
###..    #####$ #
  #..    ####   #
  #..       $$  #
  #..    #### $ #
  #..    #  #   #
  ########  #####
;LEVEL 84
#######
#     ##########
#     #    #  ##
# $   #   $ $  #
#  $  #  $ ##  #
# $$  ##$ $    #
## #  ## #######
## #  ##    ...#
#  #$       ...#
#   $$      ...#
#     ##@#  ...#
################
;LEVEL 85
############
#      #   ##
# $  $   #  ######
####  #####      #
 #..  #     #### #
 #.####  ####    #
 #....    #  $ ####
 # ...#   # $$$#  ##
###.#### ##  $@$   #
#     ##### $ #    #
# #.# $      $###$ #
# #.########  #  $ #
# #..        ##  $ #
# # ####### $ # #  #
#   #     #       ##
#####     ##########`.split(';');
	/**\/
	const rawLevels =
`LEVEL 1
########
#@$   .#
########`.split(';');
	/**/

	const maxWidth = 20;

	var levels = {};

	levels.list = {};

	let getLevel = function(needle) {
		for (let i in rawLevels) {
			let level = rawLevels[i].split("\n");
			let levelName = level[0];
			if (levelName !== needle) {
				continue;
			}
			levels.list[levelName] = {};
			levels.list[levelName].name = levelName;
			levels.list[levelName].map = [];
			levels.list[levelName].maxWidth = 0;
			for (let j = 1; j < level.length; ++j) {
				let row = level[j].split('').map(function(el) { return el.trim(); });
				if (row.length == 0) {
					continue;
				}
				levels.list[levelName].map.push(row);
				if (row.length > levels.list[levelName].maxWidth) {
					levels.list[levelName].maxWidth = row.length;
				}
			}
			levels.list[levelName].padLeft = Math.floor((maxWidth - levels.list[levelName].maxWidth) / 2);
			return levels.list[levelName];
		}
		return null;
	};

	levels.get = function(i) {
		return getLevel('LEVEL ' + i);
	};

	return levels;
}();