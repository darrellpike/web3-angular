import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NftItem } from '@datatypes/collection-item';
import { User } from '@datatypes/user';

import { NftItemsService } from '@services/nft-items.service';
import { UserService } from '@services/user.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {

  onSaleItems: NftItem[] = [];
  createdItems: NftItem[] = [];
  linkedItems: NftItem[] = [];
  user: User | undefined;

  constructor(
    private nftItemsService: NftItemsService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // TODO load lists & user data
    this.userService.getUser(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      this.user = data;
    });
  }

}
