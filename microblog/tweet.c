#include <stdio.h>
#include <time.h>
#include <string.h>

void getUTC(char timeStr[30]) {
    // Example formatting: Wed, 16 Jul 2025 05:16:48 GMT
    time_t rawtime;
    struct tm *ptm;
    char temp[5];

    time(&rawtime);
    printf("%d\n", rawtime);
    ptm = gmtime(&rawtime);

    switch (ptm->tm_wday) {
        case 0:
            strcpy(timeStr, "Sun");
            break;
        case 1:
            strcpy(timeStr, "Mon");
            break;
        case 2:
            strcpy(timeStr, "Tue");
            break;
        case 3:
            strcpy(timeStr, "Wed");
            break;
        case 4:
            strcpy(timeStr, "Thu");
            break;
        case 5:
            strcpy(timeStr, "Fri");
            break;
        case 6:
            strcpy(timeStr, "Sat");
            break;
        default: 
            printf("Something in weekday broke!");
            return;
    }
    snprintf(temp, 3, "%02d", ptm->tm_mday);
    strcat(timeStr, ", ");
    strcat(timeStr, temp);
    strcat(timeStr, " ");

    switch (ptm->tm_mon) {
        case 0:
            strcat(timeStr, "Jan");
            break;
        case 1:
            strcat(timeStr, "Feb");
            break;
        case 2:
            strcat(timeStr, "Mar");
            break;
        case 3:
            strcat(timeStr, "Apr");
            break;
        case 4:
            strcat(timeStr, "May");
            break;
        case 5:
            strcat(timeStr, "Jun");
            break;
        case 6:
            strcat(timeStr, "Jul");
            break;
        case 7:
            strcat(timeStr, "Aug");
            break;
        case 8:
            strcat(timeStr, "Sep");
            break;
        case 9:
            strcat(timeStr, "Oct");
            break;
        case 10:
            strcat(timeStr, "Nov");
            break;
        case 11:
            strcat(timeStr, "Dec");
            break;
        default: 
            printf("Something in month broke!");
            return;
    }

    snprintf(temp, 5, "%d", (ptm->tm_year)+1900);
    strcat(timeStr, " ");
    strcat(timeStr, temp);
    strcat(timeStr, " ");

    snprintf(temp, 3, "%02d", ptm->tm_hour);
    strcat(timeStr, temp);
    snprintf(temp, 3, "%02d", ptm->tm_min);
    strcat(timeStr, ":");
    strcat(timeStr, temp);
    snprintf(temp, 3, "%02d", ptm->tm_sec);
    strcat(timeStr, ":");
    strcat(timeStr, temp);

    strcat(timeStr, " GMT");

    return;
}

void createTweet(char tweetText[256], char tweetImgLink[256], int tweetNumber, char output[1024]) {
    char UTCtime[30];


    strcpy(output, "\t<item>\n\t\t<guid isPermaLink=\"false\">");
    //get tweet number later!
    strcat(output, "TWEET NUMBER HERE");
    strcat(output, "</guid>\n\t\t<title>");
    strcat(output, tweetText);
    strcat(output, "</title>\n\t\t<pubdate>");
    getUTC(UTCtime);
    strcat(output, UTCtime);
    strcat(output, "</pubdate>\n\t\t<link>");
    /////
    strcat(output, "LINK HERE!");
    strcat(output, "</link>\n\t\t<description>");
    if (strlen(tweetImgLink) > 1) {
        strcat(output, "<img loading=\"lazy\" src=\"");
        strcat(output, tweetImgLink);
        strcat(output, "\" />");

    }
    strcat(output, "</description>\n\t</item>");
}

struct microblogInfo {
    char rssFileName[128];
    char channelName[128];
    int tweetCount;
};

int main (int argc, char **argv) {
    char imgLink[256];
    char tweetText[256];
    char formattedTweet[1024];
    //char headerFileName[128] = "header";
    //char tweetlogFileName[128] = "log";
    struct microblogInfo info;
    FILE *fp;
    char buffer[1024];

    //sort through arguments
    for (int i = 0; i < argc; i++) {
        //printf("%s\n", argv[i]);
    }
    strcpy(info.rssFileName, "microblog.xml");

    fp = fopen(info.rssFileName, "r");

    if (!fp) {
        printf("Unable to open the RSS file! Aborting...\n");
        return -1;
    }
    // get channel link and last guid number from rss file
    while()
    fread(buffer, 1024, fp);
    printf(buffer);


    //createTweet("tweet text", "google.com", 5, formattedTweet);

    //insert formatted tweet after </image>

    fclose(fp);

    //printf("Result: \n%s\n", formattedTweet);
    return 0;
}

