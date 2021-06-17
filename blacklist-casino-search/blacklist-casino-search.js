$(document).ready(function($) {
    // Retrieve the data from the backend
    var blacklistedListData = {"GrandReef":{"casinoName":"Grand Reef","imgPath":"bl-grandreef.svg","imgAlt":"Grand Reef Casino","rating":"2.3","reasons":"FA","blacklistPageActive":true},"Balzac":{"casinoName":"Balzac Casino","imgPath":"bl-balzac.svg","imgAlt":"Balzac Casino","rating":"2.1","reasons":"PP","blacklistPageActive":true},"OrangeGamez":{"casinoName":"Orange Gamez","imgPath":"bl-orangegamez.svg","logoalt":"Orange Gamez","rating":"1.2","reasons":"PP","blacklistPageActive":true},"IndioCasino":{"casinoName":"Indio Casino","imgPath":"bl-indio.svg","imgAlt":"Indio Casino","rating":"2.1","reasons":"OQP","blacklistPageActive":true},"LakePalace":{"casinoName":"Lake Palace","imgPath":"bl-lakepalace.svg","imgAlt":"Lake Palace","rating":"3.4","reasons":"OQP","blacklistPageActive":true},"CasinoExtreme":{"casinoName":"Casino Extreme","imgPath":"bl-extreme.svg","imgAlt":"Casino Extreme","rating":"1.1","reasons":"OQP","blacklistPageActive":true},"SlotsOasis":{"casinoName":"Slots Oasis","imgPath":"bl-slotsoasis.svg","imgAlt":"Slots Oasis","rating":"1.2","reasons":"PP","blacklistPageActive":true},"Mapau":{"casinoName":"Mapau","imgPath":"bl-mapau.svg","imgAlt":"Mapau","rating":"1.4","reasons":"PP","blacklistPageActive":true},"PureVegas":{"casinoName":"Pure Vegas","imgPath":"bl-purevegas.svg","imgAlt":"Pure Vegas","rating":"3.1","reasons":"PP","blacklistPageActive":true},"NobleCasino":{"casinoName":"Noble Casino","imgPath":"bl-noblecasino.svg","imgAlt":"Noble Casino","rating":"2.3","reasons":"OQP","blacklistPageActive":true},"MightySlots":{"casinoName":"Mighty Slots","imgPath":"bl-mightyslots.svg","imgAlt":"Mighty Slots","rating":"4.2","reasons":"PP","blacklistPageActive":true},"VillaFortuna":{"casinoName":"Villa Fortuna","imgPath":"bl-villafortuna.svg","imgAlt":"Villa Fortuna Casino","rating":"3.5","reasons":"OQP","blacklistPageActive":true},"VipGoldenClub":{"casinoName":"VIP Golden Club","imgPath":"","imgAlt":"","rating":"","reasons":"RG","blacklistPageActive":true},"RushmoreCasino":{"casinoName":"Rushmore Casino","imgPath":"bl-rushmore.svg","imgAlt":"Rushmore Casino","rating":"2.3","reasons":"PP","blacklistPageActive":true},"CherryRed":{"casinoName":"Cherry Red","imgPath":"bl-cherryred.svg","imgAlt":"Cherry Red","rating":"1.5","reasons":"PP","blacklistPageActive":true},"GrandPrive":{"casinoName":"Grand Prive","imgPath":"bl-grandprive.svg","imgAlt":"Grand Prive","rating":"2.3","reasons":"OQP","blacklistPageActive":true},"PalaceofChance":{"casinoName":"Palace of Chance","imgPath":"bl-palaceofchance.svg","imgAlt":"Palace Of Chance","rating":"1.9","reasons":"PP","blacklistPageActive":true},"WorldWideWagering":{"casinoName":"Worldwide Wagering","imgPath":"bl-worldwidewagering.svg","imgAlt":"Worldwide Wagering","rating":"3.2","reasons":"OQP","blacklistPageActive":true},"AceLiveCasino":{"casinoName":"Ace Live Casino","imgPath":"bl-acelive.svg","imgAlt":"Ace Live Casino","rating":"2.8","reasons":"OQP","blacklistPageActive":true},"PrestigeCasino":{"casinoName":"Prestige Casino","imgPath":"bl-prestige.svg","imgAlt":"Prestige Casino","rating":"2.2","reasons":"FA","blacklistPageActive":true},"JupiterClub":{"casinoName":"Jupiter Club","imgPath":"bl-jupiterclub.svg","imgAlt":"Jupiter Club","rating":"3.1","reasons":"OQP","blacklistPageActive":true},"LovoLotto":{"casinoName":"Lovo Lotto","imgPath":"","imgAlt":"Lovo Lotto","rating":"2.1","reasons":"OQP","blacklistPageActive":true},"WinPalace":{"casinoName":"Win Palace","imgPath":"bl-winpalace.svg","imgAlt":"Win Palace","rating":"2.5","reasons":"PP","blacklistPageActive":true},"WinnerIsLandCasino":{"casinoName":"Winner Is Land Casino","imgPath":"","imgAlt":"","rating":"","reasons":"FA","blacklistPageActive":true},"SkyKings":{"casinoName":"Sky Kings","imgPath":"bl-skykings.svg","imgAlt":"Sky Kings","rating":"1.9","reasons":"OQP","blacklistPageActive":true},"OnblingCasino":{"casinoName":"Onbling Casino","imgPath":"bl-onbling.svg","imgAlt":"Onbling Casino","rating":"2.3","reasons":"OQP","blacklistPageActive":true},"RoyalAce":{"casinoName":"Royal Ace","imgPath":"bl-royalace.svg","imgAlt":"Royal Ace","rating":"2.1","reasons":"PP","blacklistPageActive":true},"SwissCasino":{"casinoName":"Swiss Casino","imgPath":"bl-swisscasino.svg","imgAlt":"Swiss Casino","rating":"1.2","reasons":"OQP","blacklistPageActive":true},"50Stars":{"casinoName":"50 Stars","imgPath":"bl-50stars.svg","imgAlt":"50 Stars","rating":"2.7","reasons":"PP","blacklistPageActive":true},"MajesticComet":{"casinoName":"Majestic Comet","imgPath":"bl-majesticcomet.svg","imgAlt":"Majestic Comet Casino","rating":"3.2","reasons":"PP","blacklistPageActive":true},"LondonsCasino":{"casinoName":"Londons Casino","imgPath":"","imgAlt":"Londons Casino","rating":"2.8","reasons":"PP","blacklistPageActive":true},"JackpotsHeaven":{"casinoName":"Jackpots Heaven","imgPath":"bl-jackpotsheaven.svg","imgAlt":"Jackpots Heaven","rating":"1.3","reasons":"OQP","blacklistPageActive":true},"LockCasino":{"casinoName":"Lock Casino","imgPath":"bl-lockcasino.svg","imgAlt":"Lock Casino","rating":"3.4","reasons":"PP","blacklistPageActive":true},"CarnivalCasino":{"casinoName":"Carnival Casino","imgPath":"bl-carnival.svg","imgAlt":"Carnival Casino","rating":"2.1","reasons":"OQP","blacklistPageActive":true},"DenderaCasino":{"casinoName":"Dendera Casino","imgPath":"bl-dendera.svg","imgAlt":"Dendera Casino","rating":"2.5","reasons":"SP","blacklistPageActive":true},"PlumGamingCasino":{"casinoName":"Plum Gaming Casino","imgPath":"bl-plum.svg","imgAlt":"Plum Gaming Casino","rating":"2.2","reasons":"PP","blacklistPageActive":true},"OceansOnline":{"casinoName":"Oceans Online","imgPath":"bl-oceans.svg","imgAlt":"Oceans Online","rating":"3.2","reasons":"PP","blacklistPageActive":true},"Vegas24":{"casinoName":"Vegas 24","imgPath":"","imgAlt":"Vegas 24","rating":"1.6","reasons":"OQP","blacklistPageActive":true},"LegendSports":{"casinoName":"Legend  Sports","imgPath":"bl-legends.svg","imgAlt":"Legend Sports","rating":"2.5","reasons":"OQP","blacklistPageActive":true},"SierraStar":{"casinoName":"Sierra Star","imgPath":"bl-sierrastar.svg","imgAlt":"Sierra Star Casino","rating":"2.9","reasons":"OQP","blacklistPageActive":true},"Lucky18":{"casinoName":"Lucky 18","imgPath":"bl-lucky18.svg","imgAlt":"Lucky 18","rating":"3.2","reasons":"PP","blacklistPageActive":true},"PlanetKings":{"casinoName":"Planet Kings","imgPath":"bl-planetkings.svg","imgAlt":"Planet Kings","rating":"1.8","reasons":"OQP","blacklistPageActive":true},"EuroPlay":{"casinoName":"Euro Play Casino","imgPath":"bl-europlay.svg","imgAlt":"Euro Play Casino","rating":"2.9","reasons":"PP","blacklistPageActive":true},"EldoradoPalace":{"casinoName":"Eldorado Palace","imgPath":"bl-eldorado.svg","imgAlt":"Eldorado Palace","rating":"3.1","reasons":"OQP","blacklistPageActive":true},"LasCasinoVegas":{"casinoName":"Las Casino Vegas","imgPath":"","imgAlt":"Las Casino Vegas","rating":"2.4","reasons":"FA","blacklistPageActive":true},"BetportCasino":{"casinoName":"Betport Casino","imgPath":"bl-betport.svg","imgAlt":"Betport Casino","rating":"2.1","reasons":"OQP","blacklistPageActive":true},"LadyDream":{"casinoName":"Lady Dream","imgPath":"bl-ladydream.svg","imgAlt":"Lady Dream Casino","rating":"3.3","reasons":"RG","blacklistPageActive":true},"AmcoCasino":{"casinoName":"Amco Casino","imgPath":"bl-amco.svg","imgAlt":"Amco Casino","rating":"4.2","reasons":"RG","blacklistPageActive":true},"AztecCasino":{"casinoName":"Aztec Casino","imgPath":"","imgAlt":"Aztec Casino","rating":"3.5","reasons":"RG","blacklistPageActive":true},"BellaVegas":{"casinoName":"Bella Vegas","imgPath":"bl-bellavegas.svg","imgAlt":"Bella Vegas Casino","rating":"1.3","reasons":"SP","blacklistPageActive":true},"BetTheDealer":{"casinoName":"Beat the Dealer","imgPath":"bl-beatthedealer.svg","imgAlt":"Bet The Dealer","rating":"1.7","reasons":"PP","blacklistPageActive":true},"BrandyCasino":{"casinoName":"Brandy Casino","imgPath":"bl-brandy.svg","imgAlt":"Brandy Casino","rating":"3.2","reasons":"SP","blacklistPageActive":true},"CasinoTropez":{"casinoName":"Casino Tropez","imgPath":"bl-tropez.svg","imgAlt":"Casino Tropez","rating":"2.5","reasons":"PP","blacklistPageActive":true},"CasinoDelRio":{"casinoName":"Casino Del Rio","imgPath":"bl-delrio.svg","imgAlt":"Casino Del Rio","rating":"2.4","reasons":"OQP","blacklistPageActive":true},"CasinoStates":{"casinoName":"Casino States","imgPath":"bl-casinostates.svg","imgAlt":"Casino States","rating":"2.6","reasons":"FA","blacklistPageActive":true},"CatsEyeCasino":{"casinoName":"Cats Eye Casino","imgPath":"bl-catseye.svg","imgAlt":"Cats Eye Casino","rating":"2.1","reasons":"PP","blacklistPageActive":true},"CirrusCasino":{"casinoName":"Cirrus Casino","imgPath":"bl-cirrus.svg","imgAlt":"Cirrus Casino","rating":"2.3","reasons":"PP","blacklistPageActive":true},"ClassOne":{"casinoName":"Class One","imgPath":"bl-class1.svg","imgAlt":"Class One Casino","rating":"2.3","reasons":"OQP","blacklistPageActive":true},"ClassyCoin":{"casinoName":"Classy Coin","imgPath":"bl-classycoin.svg","imgAlt":"Classy Coin Casino","rating":"2.1","reasons":"OQP","blacklistPageActive":true},"ClubDice":{"casinoName":"Club Dice","imgPath":"bl-clubdice.svg","imgAlt":"Club Dice","rating":"1.6","reasons":"OQP","blacklistPageActive":true},"CoolCatCasino":{"casinoName":"CoolCat Casino","imgPath":"bl-coolcat.svg","imgAlt":"CoolCat Casino","rating":"2.0","reasons":"PP","blacklistPageActive":true},"GoldBetting":{"casinoName":"Gold Betting","imgPath":"bl-goldbetting.svg","imgAlt":"Gold Betting Casino","rating":"1.7","reasons":"PP","blacklistPageActive":true},"GoldenGalaxy":{"casinoName":"Golden Galaxy","imgPath":"bl-goldengalaxy.svg","imgAlt":"Golden Galaxy Casino","rating":"3.3","reasons":"SP","blacklistPageActive":true},"GrandBayCasino":{"casinoName":"Grand Bay Casino","imgPath":"bl-grandbay.svg","imgAlt":"Grand Bay Casino","rating":"1.3","reasons":"OQP","blacklistPageActive":true},"iButlerCasino":{"casinoName":"iButler Casino","imgPath":"bl-ibutler.svg","imgAlt":"iButler Casino","rating":"1.1","reasons":"OQP","blacklistPageActive":true},"1x2Gaming":{"casinoName":"1X2 gaming","imgPath":"bl-1x2gaming.svg","imgAlt":"1X2 Gaming","rating":"3.2","reasons":"FA","blacklistPageActive":true},"LibertyBell":{"casinoName":"Liberty Bell","imgPath":"bl-libertybell.svg","imgAlt":"Liberty Bell Casino","rating":"3.6","reasons":"OQP","blacklistPageActive":true},"MiamiBeachCasino":{"casinoName":"Miami Beach Casino","imgPath":"bl-miamibeach.svg","imgAlt":"Miami Beach Casino","rating":"2.5","reasons":"PP","blacklistPageActive":true},"Planet7":{"casinoName":"Planet 7","imgPath":"bl-planet.svg","imgAlt":"Planet 7","rating":"1.1","reasons":"PP","blacklistPageActive":true},"RoadHouseReels":{"casinoName":"Road House Reels","imgPath":"bl-roadhousereels.svg","imgAlt":"Road House Reels","rating":"3.4","reasons":"SP","blacklistPageActive":true},"SlotsAlley":{"casinoName":"Slots Alley","imgPath":"bl-slotsalley.svg","imgAlt":"Slots Alley Casino","rating":"2.1","reasons":"OQP","blacklistPageActive":true},"SlotsOfFortune":{"casinoName":"Slots Of Fortune","imgPath":"bl-slotsoffortune.svg","imgAlt":"Slots Of Fortune","rating":"2.6","reasons":"OQP","blacklistPageActive":true},"SuperCasino":{"casinoName":"Super Casino","imgPath":"bl-supercasino.svg","imgAlt":"Super Casino","rating":"3.5","reasons":"PP","blacklistPageActive":true},"21Dukes":{"casinoName":"21 Dukes","imgPath":"bl-21dukes.svg","imgAlt":"21 Dukes","rating":"2.4","reasons":"PP","blacklistPageActive":true},"Wager21Casino":{"casinoName":"Wager21 Casino","imgPath":"","imgAlt":"","rating":"","reasons":"RG","blacklistPageActive":true},"VernonsCasino":{"casinoName":"Vernons Casino","imgPath":"bl-vernons.svg","imgAlt":"Vernons casino","rating":"1.9","reasons":"OQP","blacklistPageActive":true},"WinAsDealer":{"casinoName":"Win As Dealer","imgPath":"bl-winasdealer.svg","imgAlt":"Win As Dealer Casino","rating":"1.2","reasons":"PP","blacklistPageActive":true},"CrownCasino":{"casinoName":"Crown Casino","imgPath":"bl-crowneurope.svg","imgAlt":"Win As Crown Casino","rating":"3.1","reasons":"OQP","blacklistPageActive":true},"WildVegasCasino":{"casinoName":"Wild Vegas Casino","imgPath":"","imgAlt":"","rating":"","reasons":"PP","blacklistPageActive":true},"CasinoFiz":{"casinoName":"Casino Fiz","imgPath":"bl-fiz.svg","imgAlt":"Casino Fiz","rating":"1.1","reasons":"OQP","blacklistPageActive":true},"Prism":{"casinoName":"Prism Casino","imgPath":"bl-prismcasino.png","imgAlt":"Prism Casino","rating":"1.7","reasons":"PP","blacklistPageActive":true},"BluCasino":{"casinoName":"Blu Casino","imgPath":"bl-blucasino.png","imgAlt":"Blu Casino","rating":"1.8","reasons":"PP","blacklistPageActive":true},"RomeCasino":{"casinoName":"Rome Casino","imgPath":"bl-romecasino.png","imgAlt":"Rome Casino","rating":"1.6","reasons":"PP","blacklistPageActive":true},"ParkLaneCasino":{"casinoName":"Park Lane Casino","imgPath":"bl-parklane.png","imgAlt":"Park Lane Casino","rating":"2.5","reasons":"PP","blacklistPageActive":true},"OsirisCasino":{"casinoName":"Osiris Casino","imgPath":"bl-oziris.png","imgAlt":"Osiris Casino","rating":"1.4","reasons":"PP","blacklistPageActive":true},"RagingBull":{"casinoName":"Raging Bull Casino","imgPath":"bl-ragingbull.png","imgAlt":"Raging Bull Casino","rating":"1.4","reasons":"PP","blacklistPageActive":true},"CasinoX":{"casinoName":"Casino-X","imgPath":"bl-asinox.png","imgAlt":"Casino-X","rating":"2.1","reasons":"PP","blacklistPageActive":true},"TriompheCasino":{"casinoName":"Triomphe Casino","imgPath":"bl-triomphe.png","imgAlt":"Triomphe Casino","rating":"2.3","reasons":"PP","blacklistPageActive":true},"SlotsOfVegas":{"casinoName":"Slots of Vegas","imgPath":"bl-slotsofvegas.svg","imgAlt":"Slots of Vegas Casino","rating":"1.9","reasons":"FA","blacklistPageActive":true},"CaptainJackCasino":{"casinoName":"Captain Jack Casino","imgPath":"bl-captainjackcasino.svg","imgAlt":"Captain Jack Casino","rating":"3.1","reasons":"PP","blacklistPageActive":true}};

    // As for ECMAS definition objects are not sorted
    // Convert the object into a sortable array
    sortableBlacklistedListData = [];
    for (var casino in blacklistedListData) {
        sortableBlacklistedListData.push([
            casino,
            blacklistedListData[casino]['casinoName'],
            blacklistedListData[casino]['reasons']
        ]);
    }

    // Sort the array
    var sortedBlacklistedListData = sortableBlacklistedListData.sort(function (blacklistCasinoName,blacklistCasinoCompareName)
    {
        // create Variables to compare to via uppercase to take out the case sensitivity
        var upperBlacklistCasinoName = String(blacklistCasinoName).toUpperCase();
        var upperBlacklistCasinoCompareName = String(blacklistCasinoCompareName).toUpperCase();
        // Then we compare them against each other. If upperBlacklistCasinoName is greater or higher than
        // upperBlacklistCasinoCompareName sort it higher by returning a 1.
        if(upperBlacklistCasinoName > upperBlacklistCasinoCompareName ){
            return 1
            // If upperBlacklistCasinoName is lower or less than upperBlacklistCasinoCompareName it returns a -1 because
            // sort works according to the return of the value. So less than 0 would be -1
        } else if(upperBlacklistCasinoName < upperBlacklistCasinoCompareName){
            return -1
        } else {
            // if they are equal than it equals 0
            return 0;
        }
    });

        // Table target
        var listTable = $('.blacklist-table');

        // Build the table with all the casinos listed
        for (var casino in sortedBlacklistedListData) {

            $(listTable).append(`
            <div class="tbl-row">
                <div class="tbl-cell">
                    ${sortedBlacklistedListData[casino][1]}
                </div>
                <div class="tbl-cell">
                    <i class="fa fa-ban"></i>
                </div>
                <div class="tbl-cell">
                    ${esplicitReason(sortedBlacklistedListData[casino][2])}
                </div>
            </div>
            `);
        }

        // Light dictionary betwee the code used from the back end and the labels
        function esplicitReason(abbr) {

            switch (abbr.toLowerCase()) {
                case 'pp':
                    return 'Payment Problems';
                    break;

                case 'rg':
                    return 'Rigged Games';
                    break;

                case 'fa':
                    return 'False Advertising';
                    break;

                case 'sp':
                    return 'Spamming Players';
                    break;

                case 'oqp':
                    return 'Other Questionable Practices';
                    break;

                default:
                    return 'Other Questionable Practices';
            }
        }

        /**
         * Function for filter the elements by comparison with an input
         *
         * Input is the string used for the comparison
         * Target is the table that will be affected by the filter
         *
         * @param input
         * @param target
         */
        function filterByText(input, target){

            var liNumber = 0;

            // Hide all the items
            $(target).find('.tbl-row').hide();

            $(target).find('.tbl-row').each(function () {

                var text = $(this).text().toLowerCase();

                if (text.indexOf(input) != -1) {
                    $(this).show();

                    // Check if odd or even
                    if (liNumber % 2 === 0) {
                        $(this).css('background-color', '#fff');
                    } else {
                        $(this).css('background-color', '#e5e5e5');
                    }

                    liNumber++;
                }
            });
        }

        // Input field functionality on keyup event
        $('#blacklist-search-text').keyup(function () {
            filterByText($(this).val().toLowerCase(), listTable);
        });

        // Filter clear function
        $('.clear-filters').on('click', function () {
            filterByText("", listTable);
            $('.blacklist-filters-select').prop('selectedIndex', 0);
            $('#blacklist-search-text').val('');
        });

        $('.blacklist-filters-select').on('change', function(e){


            e.preventDefault();
            var selectedFilter = $("option:selected", this).text().toLowerCase().replace(/\s/g, ''),
                liNumber = 0;

            $(listTable).find('.tbl-row').hide();

            $(listTable).find('.tbl-row').each(function () {

                var text = $(this)
                    .find('div.tbl-cell:nth-child(3)')
                    .text()
                    .toLowerCase()
                    .replace(/\s/g, '');

                if (text == selectedFilter) {
                    $(this).show();

                    // Check if odd or even
                    if (liNumber % 2 === 0) {
                        $(this).css('background-color', '#fff');
                    } else {
                        $(this).css('background-color', '#eaf2f9');
                    }

                    liNumber++;
                }
            });

        });
    
})