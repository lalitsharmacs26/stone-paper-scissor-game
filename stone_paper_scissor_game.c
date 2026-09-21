#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main()
{
    char a;
    srand(time(0));
    do 
    {     
    int player_score = 0, computer_score = 0;
    int round = 1;
    int total_score_of_player = 0;
    int total_score_of_computer = 0;
   
        do
        {
            printf("__%d ROUND START__\n", round);
            int player, computer = rand() % 3 + 1;
            printf("STONE , PAPER & SCISSOR GAME\n");
            printf("||   1 FOR PAPER , 2 FOR STONE , 3 FOR SCISSOR   ||\n");
            printf("||   PLAYER CHANCE   ||\n");
        scanf("%d", &player);
        if (player == 1)
        {
            printf("PLAYER CHOICE = PAPER\n");
        }
        else if (player == 2)
        {
            printf("PLAYER CHOICE = STONE\n");
        }
        else if (player == 3)
        {
            printf("PLAYER CHOICE = SCISSOR\n");
        }
        else
        {
            printf("INVALID CHOICE\n");
        }
        printf("||   COMPUTER CHANCE   ||\n");
        // printf("%d\n", computer);
        if (computer == 1)
        {
            printf("COMPUTER CHOICE = PAPER\n");
        }
        else if (computer == 2)
        {
            printf("COMPUTER CHOICE = STONE\n");
        }
        else if (computer == 3)
        {
            printf("COMPUTER CHOICE = SCISSOR\n");
        }
        else
        {
            printf("INVALID CHOICE\n");
        }
        if (player == 1 && computer == 1 || player == 2 && computer == 2 || player == 3 && computer == 3)
        {
            printf("DRAW IN ROUND %d\n" , round);
            player_score += 10;
            computer_score += 10;
            printf("PLAYER SCORE = %d\n", player_score);
            printf("COMPUTER SCORE = %d\n", computer_score);
        }
        else if (player == 1 && computer == 2 || player == 2 && computer == 3 || player == 3 && computer == 1)
        {
            printf("PLAYER WON IN ROUND %d\n" , round);
            player_score += 10;
            computer_score += 0;
            printf("PLAYER SCORE = %d\n", player_score);
            printf("COMPUTER SCORE = %d\n", computer_score);
        }
        else if (player == 2 && computer == 1 || player == 3 && computer == 2 || player == 1 && computer == 3)
        {
            printf("COMPUTER WON IN ROUND %d\n" , round);
            player_score += 0;
            computer_score += 10;
            printf("PLAYER SCORE = %d\n", player_score);
            printf("COMPUTER SCORE = %d\n", computer_score);
        }
        else
        {
            printf("INVALID CHOICE\n");
        }
        round++;
    } while (round <= 5);
    total_score_of_player = player_score;
    total_score_of_computer = computer_score;
    printf("TOTAL PLAYER SCORE = %d\n", total_score_of_player);
    printf("TOTAL computer SCORE = %d\n", total_score_of_computer);
    if (total_score_of_player == total_score_of_computer)
    {
        printf("DRAW\n");
    }
    else if (total_score_of_player > total_score_of_computer)
    {
        printf("PLAYER WON\n");
    }
    else
    {
        printf("COMPUTER WON\n");
    }
    printf("DO YOU WANT TO PLAY AGAIN? (Y/N)");
    scanf(" %c" , &a);
} while (a=='Y' || a=='y');

printf("GOOD BYE");
    return 0;
}
